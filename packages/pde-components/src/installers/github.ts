import * as path from 'path';
import 'zx/globals';
import { Construct } from 'constructs';
import { InstallerOptions, IHome, IProfile, InstallerNew } from 'pde-core';
import { ShellInstaller } from './shell.js';

/**
 * Common options for installing a component from a GitHub repo
 */
export interface GitHubInstallerOptions extends InstallerOptions {
  /**
   *
   */
  readonly home: IHome;

  /**
   * The GitHub organization
   */
  readonly org: string;

  /**
   * The GitHub repo name
   */
  readonly repo: string;
}

/**
 * Options for installing a component from a GitHub repo
 */
export interface GitHubRepoOptions extends GitHubInstallerOptions {
  /**
   *
   */
  readonly profile: IProfile;
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
  readonly version?: string;

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

export class GitHubRepoInstaller extends InstallerNew {
  public readonly name: string;
  public readonly absolutePathVar: string;
  private readonly folderName: string;

  constructor(scope: Construct, id: string, options: GitHubRepoOptions) {
    const folderName = options.folderName ?? options.repo;
    const absolutePath = path.join(options.home.homeLocation, folderName);
    const url = `https://github.com/${options.org}/${options.repo}.git`;
    const version = options.version ?? 'main';

    const clone = `
      cd('${options.home.homeLocation}');
      await $\`git clone ${url} ${folderName}\`;
    `;

    const returnValue = `
      const version = await \`git rev-parse --abbrev-ref HEAD\`;
      const folderName = await $\`pwd\`;
      echo \`{
        folderName,
        version,
      }\`
    `;

    super(scope, id, {
      create: `
        $.cwd = ${absolutePath};
        ${clone}
        await $\`git checkout ${version}\`;
        ${options.installCommands?.map(cmd => `await $\`${cmd}\``).join('\n\t')};
        ${returnValue}
      `,
      update: `
        $.cwd = ${absolutePath};
        await $\`git clean -fzdx\`;
        await $\`git checkout ${version} && git pull\`;
        ${options.installCommands?.map(cmd => `await $\`${cmd}\``).join('\n\t')};
        ${returnValue}
      `,
      read: `
        cd('${absolutePath}')
        ${returnValue}
      `,
      delete: `
        await $\`rm -rf ${absolutePath}\`;
      `,

    });

    this.name = `${options.org}-${options.repo}`;
    this.folderName = options.folderName ?? options.repo;
    this.absolutePathVar = path.join(options.home.homeVar, this.folderName);
    if (options.addBin) {
      options.profile.addToEnv('PATH', `$PATH:${path.join(options.home.homeLocation, this.folderName, 'bin')}`);
    }
  }
}

export class GitHubReleaseInstaller extends ShellInstaller {
  constructor(scope: Construct, id: string, options: GitHubReleaseOptions) {
    const downloadPath = `${options.org}/${options.repo}/releases/download`;
    const parsedPath = path.parse(options.assetName);
    const ext = parsedPath.ext;
    let executable = !!options.executable;
    const installCommands: string[] = [];
    const downloadUrl = new URL(path.join(downloadPath, options.version, options.assetName), 'https://github.com');
    // TODO: this needs some rework...
    if (parsedPath.name.includes('amd64') || parsedPath.name.includes('tmux')) {
      switch (ext) {
        case '.deb':
          installCommands.push(`sudo dpkg -i ${options.assetName}`);
          break;
        case '.gz':
          executable = true;
          installCommands.push(`tar -xzvf ${options.assetName} -C ${options.home.binLocation}`);
      }
    }
    super(scope, id, {
      deleteCommands: [
        'echo "nothing to do here"'
      ],
      versionCommand: options.versionCommand,
      downloadUrl: downloadUrl.toString(),
      name: `${options.org}-${options.repo}`,
      executable,
      installCommands,
    });
  }
}
