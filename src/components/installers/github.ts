import * as path from 'path';
import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { ShellInstaller } from './shell';
import { Installer, Project } from '../../core';

/**
 * Common options for installing a component from a GitHub repo
 */
export interface GitHubInstallerOptions {
  /**
   * The GitHub organization
   */
  readonly org: string;

  /**
   * The GitHub repo name
   */
  readonly repo: string;

  /**
   * This should be the name of the program that is being installed
   *
   * @default repo
   */
  readonly name?: string;

  /**
   * Any install commands that should be run after the component has been downloaded
   *
   * @default - no install commands are run after downloading
   */
  readonly installCommands?: string[];

  /**
   * Commands to run in order to delete the program
   */
  readonly uninstallCommands?: string[];

  /**
   * TODO: docs
   *
   * @default - TODO
   */
  readonly versionCommand?: string;

  /**
   * Any update commands that should be run after the component has been downloaded
   *
   * @default - no update commands are run after downloading
   */
  readonly updateCommands?: string[];
}

/**
 * Options for installing a component from a GitHub repo
 */
export interface GitHubRepoOptions extends GitHubInstallerOptions {
  /**
   * The name of the folder where the repo should be cloned to. This will
   * be relative to the home directory.
   *
   * @default - the name of the repo
   */
  readonly folderName?: string;

  /**
   * The version to clone
   *
   * @default - main
   */
  readonly branch?: string;

  /**
   * Whether the repo contains a 'bin' folder that should
   * be added to the system bin
   *
   * @default false
   */
  readonly addBin?: boolean;
}

/**
 * Options for installing a component from a GitHub release
 */
export interface GitHubReleaseOptions extends GitHubInstallerOptions {
  /**
   * The GitHub release version, e.g. v8.4.0
   */
  readonly version: string; // v8.4.0

  /**
   * The name of the asset that you want to install from the release
   *
   * e.g. fd_8.4.0_amd64.deb
   */
  readonly assetName: string; // fd_8.4.0_amd64.deb

  /**
   * If the downloaded asset is an executable, what name do
   * you want to use for the executable
   *
   * @default - not an executable
   */
  readonly executable?: string;
}

export class GitHubRepoInstaller extends TerraformStack {
  public readonly name: string;
  public readonly absolutePathVar: string;
  private readonly folderName: string;

  constructor(scope: Construct, id: string, options: GitHubRepoOptions) {
    super(scope, id);
    const project = Project.ofProject(this);
    const folderName = options.folderName ?? options.repo;
    const absolutePath = path.join(project.home.homeLocation, folderName);
    const url = `https://github.com/${options.org}/${options.repo}.git`;
    const version = options.branch ?? 'main';

    const clone = `
      cd('${project.home.homeLocation}');
      await $\`git clone ${url} ${folderName}\`;
    `;

    const returnValue = `
      const version = await \`git rev-parse --abbrev-ref HEAD\`;
      const folderName = await $\`pwd\`;
      const returnValue = JSON.stringify({ folderName, version });
      echo\`\$\${returnValue}\`
    `;

    new Installer(this, id, {
      create: `
  cd('${project.home.homeLocation}');
  ${clone}
  cd('${absolutePath}')
  await $\`git checkout ${version}\`;
  ${options.installCommands?.map(cmd => `await $\`${cmd}\`;`).join('\n\t')}
  ${returnValue}
      `,
      update: `
  $.cwd = '${absolutePath}';
  await $\`git clean -fzdx\`;
  await $\`git checkout ${version} && git pull\`;
  ${options.installCommands?.map(cmd => `await $\`${cmd}\`;`).join('\n\t')}
  ${returnValue}
      `,
      read: `
  cd('${absolutePath}');
  ${returnValue}
      `,
      delete: `
  await $\`rm -rf ${absolutePath}\`;
      `,
    });

    this.name = `${options.org}-${options.repo}`;
    this.folderName = options.folderName ?? options.repo;
    this.absolutePathVar = path.join(project.home.homeVar, this.folderName);
    if (options.addBin) {
      project.profile.addToEnv('PATH', `$PATH:${path.join(project.home.homeLocation, this.folderName, 'bin')}`);
    }
  }
}

export class GitHubReleaseInstaller extends ShellInstaller {
  constructor(scope: Construct, id: string, options: GitHubReleaseOptions) {
    const project = Project.ofProject(scope);
    const pkg = path.join(project.systemTmpDir, options.assetName);
    const downloadPath = `${options.org}/${options.repo}/releases/download`;
    const parsedPath = path.parse(options.assetName);
    const ext = parsedPath.ext;
    let executable = !!options.executable;
    const installCommands: string[] = [];
    const downloadUrl = new URL(path.join(downloadPath, options.version, options.assetName), 'https://github.com');
    // TODO: this needs some rework...
    if (parsedPath.name.includes('amd64') || parsedPath.name.includes('x86_64')) {
      switch (ext) {
        case '.deb':
          installCommands.push(`sudo dpkg -i ${pkg}`);
          break;
        case '.gz':
          installCommands.push(`tar -xzvf ${pkg}`);
          break;
        case '.zip':
          installCommands.push(`unzip -o ${pkg}`);
      }
    }
    if (options.executable) {
      installCommands.push(`mv ${options.executable} ${project.home.binLocation}`);
    }
    super(scope, id, {
      uninstallCommands: [
        ...options.executable
          ? [`rm -rf ${path.join(project.home.binLocation, options.executable)}`]
          // TODO: figure out how we uninstall other things
          : ["echo 'nothing to do here...'"],
      ],
      versionCommand: options.versionCommand,
      downloadUrl: downloadUrl.toString(),
      name: options.executable?.split('/').pop() ?? options.repo,
      executable,
      installCommands,
    });
  }
}
