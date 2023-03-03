import { Construct } from 'constructs';
import { IHome, ISystemProfile } from 'pde-core';
import { ShellInstaller } from './shell.js';

export interface DotnetInstallerOptions {
  readonly profile: ISystemProfile;
  readonly home: IHome;

}

export class DotnetInstaller extends ShellInstaller {
  constructor(scope: Construct, id: string, options: DotnetInstallerOptions) {
    super(scope, id, {
      name: 'dotnet',
      executable: true,
      downloadUrl: 'https://dot.net/v1/dotnet-install.sh',
      versionCommand: 'dotnet --version',
      uninstallCommands: [
        "echo 'nothing to do here yet...'",
      ],
      installCommands: [`./dotnet-install.sh -c 3.1 --install-dir ${options.home.homeLocation}/.dotnet`],
      ...options,
    });

    options.profile.addToSystemPath(`${options.home.homeVar}/.dotnet`);
  }
}
