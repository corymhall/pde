import * as path from 'path';
import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { Project, InstallerOptions, Installer } from '../../core';

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

export class ShellInstaller extends TerraformStack {

  public readonly name: string;

  constructor(scope: Construct, id: string, options: UrlInstallerOptions) {
    super(scope, id);
    const downloadCommand = `curl -OL ${options.downloadUrl}`;
    const project = Project.ofProject(this);

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
    };

    const returnCommand = () => {
      return `
        ${versionCommand()}
        const returnValue = JSON.stringify({ version, name: '${options.name}' });
        echo\`\$\${returnValue}\`
      `;
    };

    new Installer(this, id, {
      create: `
   ${download()}
   ${options.installCommands?.map(cmd => `await $\`${cmd}\``).join('\n\t')}
   ${options.executable ? [
    `await $\`chmod +x ${path.join(project.home.binLocation, options.name)}\`;`,
  ].join('\n\t') : ''}
   ${returnCommand()}
      `,
      update: options.updateCommands ? `
   ${download()}
   ${(options.updateCommands?.map(cmd => `await $\`${cmd}\``) ?? []).join('\n\t')}
   ${options.executable ? [
    `await $\`chmod +x ${options.name}\`;`,
  ].join('\n\t') : ''}
   ${returnCommand()}
      ` : undefined,
      read: `
   ${returnCommand()}
      `,
      delete: `
   ${options.uninstallCommands?.map(cmd => `await $\`${cmd}\``).join('\n\t')}
      `,
    });
    this.name = options.name;
  }
}
