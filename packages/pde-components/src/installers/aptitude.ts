import { Construct } from 'constructs';
import { InstallerOptions, Installer, InstallerConfig } from 'pde-core';

/**
 * Options for installing a component from aptitude
 */
export interface AptitudeInstallerOptions extends InstallerOptions {
  /**
   * List of apt packages to install.
   * Any packages not listed will be purged
   */
  readonly pkgs?: string[];
}

export class AptitudeInstaller extends Installer {
  public readonly name: string;

  private readonly installCommand: string;
  private readonly versionsCommand: string;
  private readonly updateCommand: string;
  private readonly removeCommand: string;
  constructor(scope: Construct, id: string, options: AptitudeInstallerOptions) {
    super(scope, id, options);
    this.name = options.name;

    this.removeCommand = `aptitude versions --disable-columns -F '%p' | xargs -I{} if [[ "${options.pkgs?.join(',')}" != "*{}*" ]];then aptitude purge {};fi`;
    this.installCommand = options.pkgs ? `aptitude install ${options.pkgs.join(' ')}` : 'echo "nothing to install"';
    this.versionsCommand = "aptitude versions --disable-columns -F '%p %V'";
    this.updateCommand = options.pkgs ? `aptitude full-upgrade ${options.pkgs.join(' ')}` : 'echo "nothing to install"';
  }

  public renderInstall(): InstallerConfig {
    return {
      name: this.name,
      tasks: [
        {
          name: 'install',
          steps: [
            {
              exec: 'aptitude update',
            },
            {
              say: 'installing aptitude pkgs...',
              exec: this.installCommand,
            },
          ],
        },
        {
          name: 'update',
          steps: [
            {
              exec: 'aptitude update',
            },
            {
              say: 'updating aptitude pkgs...',
              exec: this.updateCommand,
            },
          ],
        },
        {
          name: 'versions',
          steps: [
            {
              say: 'showing installed aptitude pkgs...',
              exec: this.versionsCommand,
            },
          ],
        },
        {
          name: 'purge',
          steps: [
            {
              say: 'removing aptitude pkgs...',
              exec: this.removeCommand,
            },
          ],
        },
      ],
    };
  }
}
