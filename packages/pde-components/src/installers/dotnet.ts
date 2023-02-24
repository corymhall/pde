import { Construct } from 'constructs';
import { IHome, IProfile } from 'pde-core';
import { ShellInstaller } from './shell.js';

export interface DotnetInstallerOptions {
  readonly profile: IProfile;
  readonly home: IHome;

}

export class DotnetInstaller extends ShellInstaller {
  constructor(scope: Construct, id: string, options: DotnetInstallerOptions) {
    super(scope, id, {
      name: 'dotnet',
      executable: true,
      downloadUrl: 'https://dot.net/v1/dotnet-install.sh',
      installCommands: [`./dotnet-install.sh -c 3.1 --install-dir ${options.home.homeLocation}/.dotnet`],
      ...options,
    });

    options.profile.addToSystemPath(`${options.home.homeVar}/.dotnet`);
  }
}
