import { Construct } from 'constructs';
import { Project, InstallerOptions, Installer } from 'pde-core';

/**
 * Options for installing a component from a URL
 */
export interface UrlInstallerOptions extends InstallerOptions {
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

  constructor(scope: Construct, id: string, options: UrlInstallerOptions) {
    const fileName = options.downloadUrl.split('/').pop()!;
    const downloadCommand = `curl -OL ${options.downloadUrl}`;
    const project = Project.of(scope);

    const download = () => {
      return `
        cd('${project.systemTmpDir}');
        await $\`${downloadCommand}\`;
      `;
    };

    const versionCommand = () => {
      if (options.versionCommand) {
        return `
          const version = await $\`${options.versionCommand}\`;
        `;
      }
      return "const version = '0.0.0'";
    }

    const returnCommand = () => {
      return `
        ${versionCommand}
        echo\`'{ version, name: ${options.name} }'\`
      `
    }

    super(scope, id, {
      create: `
        ${download}
        ${options.executable ? `await $\`chmod +x ${fileName}\`;` : ''}
        ${options.installCommands?.map(cmd => `await $\`${cmd}\``).join('\n\t')};
        ${returnCommand}
      `,
      update: `
        ${download}
        ${options.updateCommands?.map(cmd => `await $\`${cmd}\``).join('\n\t')};
        ${returnCommand}
      `,
      read: `
        ${returnCommand}
      `,
      delete: `
        ${options.uninstallCommands.map(cmd => `await $\`${cmd}\``).join('\n\t')};
      `,
    });
    this.name = options.name;
  }
}
