import { Construct } from 'constructs';
import { ListrTask } from 'listr2';
import { Project, InstallerOptions, Installer, InstallerConfig } from 'pde-core';
import { $ } from 'zx';
import { chain } from '../private/utils';

/**
 * Options for installing a component from a URL
 *
 * TODO: maybe rename to UrlInstaller?
 */
export interface ShellInstallerOptions extends InstallerOptions {
  /**
   * The URL that can be used to download the component
   */
  readonly downloadUrl: string;

  /**
   * Whether or not the component is an executable
   * Set this to true if the file that is downloaded is the executable
   *
   * If this is true, you probably don't also need any installCommands
   *
   * @default false
   */
  readonly executable?: boolean;
}

export class ShellInstaller extends Installer {

  public readonly name: string;
  private readonly fileName: string;
  private readonly downloadCommand: string;
  private readonly executable?: boolean;
  constructor(scope: Construct, id: string, options: ShellInstallerOptions) {
    super(scope, id, options);
    this.fileName = options.downloadUrl.split('/').pop()!;
    this.downloadCommand = `curl -OL ${options.downloadUrl}`;
    this.name = options.name;

    const installTask: ListrTask = {
      title: 'install',
      skip: async (_ctx) => {
        try {
          await $`${this.conditions.join(' && ')}`;
          return true;
        } catch {
          return false;
        }
      },
      task: async (_ctx) => {
        await $`${this.installCommands.join(' && ')}`;
      },
    };
    this.listrs.push({
      title: 'update',
      task: async (_ctx, task) => {
        task.newListr([installTask]);
        await $`${this.updateCommands.join(' && ')}`;
      },
    });
  }

  public renderInstall(): InstallerConfig {
    const project = Project.of(this);
    return {
      name: this.name,
      tasks: [
        {
          name: 'download',
          steps: [
            {
              cwd: project.systemTmpDir,
              say: `downloading ${this.name}...`,
              name: 'update',
              exec: this.downloadCommand,
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
              cwd: project.systemTmpDir,
              say: `installing ${this.name}...`,
              name: 'install',
              exec: chain([
                ...this.executable ? [`chmod +x ${this.fileName}`] : [],
                ...this.installCommands ?? [],
              ]),
            },
          ],
          conditions: [
            `[ ! -n $(command -v ${this.name}) ]`,
          ],
        },
        {
          name: 'update',
          steps: [
            {
              spawn: `${this.name}:install`,
            },
            {
              cwd: project.systemTmpDir,
              say: `updating ${this.name}...`,
              name: 'update',
              exec: chain([
                ...this.executable ? [`chmod +x ${this.fileName}`] : [],
                ...this.updateCommands ?? [],
              ]),
            },
          ],
        },
      ],
    };
  }
}
