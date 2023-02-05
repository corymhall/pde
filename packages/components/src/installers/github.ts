import * as path from 'path';
import { Construct } from 'constructs';
import { InstallerOptions, Installer, InstallerConfig, IHome, IProfile } from 'pde-core';
import { ShellInstaller } from './shell';
import { chain } from '../private/utils';

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

export class GitHubRepoInstaller extends Installer {
  public readonly name: string;
  public readonly absolutePathVar: string;
  private readonly folderName: string;
  private readonly version: string;
  private readonly repo: string;
  private readonly org: string;
  private readonly home: IHome;

  constructor(scope: Construct, id: string, options: GitHubRepoOptions) {
    super(scope, id, options);
    this.home = options.home;
    this.name = `${options.org}-${options.repo}`;
    this.folderName = options.folderName ?? options.repo;
    this.version = options.version ?? 'main';
    this.repo = options.repo;
    this.org = options.org;
    this.absolutePathVar = path.join(options.home.homeVar, this.folderName);
    if (options.addBin) {
      options.profile.addToEnv('PATH', `$PATH:${path.join(options.home.homeLocation, this.folderName, 'bin')}`);
    }
  }

  public renderInstall(): InstallerConfig {
    const absolutePath = path.join(this.home.homeLocation, this.folderName);
    const url = `https://github.com/${this.org}/${this.repo}.git`;
    return {
      name: this.name,
      tasks: [
        {
          name: 'download',
          steps: [
            {
              cwd: this.home.homeLocation,
              say: `cloning ${this.name}`,
              name: 'clone',
            },
          ],
        },
        {
          name: 'install',
          steps: [
            {
              spawn: `${this.name}:download`,
            },
            {
              cwd: this.home.homeLocation,
              say: `cloning ${this.name}`,
              name: 'clone',
              exec: `git clone ${url} ${this.folderName}`,
            },
            {
              cwd: absolutePath,
              say: `checking out ${this.version}`,
              exec: `git checkout ${this.version}`,
            },
            {
              cwd: absolutePath,
              say: `installing ${this.name}...`,
              name: 'install',
              exec: chain(this.installCommands ?? []),
            },
          ],
          conditions: [
            `if [ -d ${absolutePath} ]; then exit 1;fi`,
          ],
        },
        {
          name: 'update',
          steps: [
            {
              cwd: absolutePath,
              say: `cleaning ${this.name}`,
              name: 'clean',
              exec: 'git clean -fqdx .',
            },
            {
              cwd: absolutePath,
              say: `updating ${this.name}`,
              exec: `git checkout ${this.version} && git pull`,
              name: 'update',
            },
          ],
        },
      ],
    };
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
      downloadUrl: downloadUrl.toString(),
      name: `${options.org}-${options.repo}`,
      executable,
      installCommands,
    });
  }
}
