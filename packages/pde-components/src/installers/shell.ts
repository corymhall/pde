import { Construct } from 'constructs';
import { ListrTask } from 'listr2';
import { Project, InstallerOptions, Installer } from 'pde-core';
import { $, cd } from 'zx';

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
    const project = Project.of(this);

    const downloadTask: ListrTask = {
      title: 'download',
      task: async (_ctx, task) => {
        cd(project.systemTmpDir);
        task.output = `downloading ${this.name}... [0]`;
        await $`${this.downloadCommand}`;
      },
    };

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
      task: async (_ctx, task) => {
        task.newListr([downloadTask]);
        if (this.executable) {
          await $`chmod +x ${this.fileName}`;
        }
        task.output = `Installing ${this.name}... [1]`;
        await $`${this.installCommands.join(' && ')}`;
      },
    };
    this.listrs.push({
      title: 'update',
      task: async (_ctx, task) => {
        task.newListr([installTask]);
        task.output = `updating ${this.name}... [2]`;
        await $`${this.updateCommands.join(' && ')}`;
      },
    });
  }
}
