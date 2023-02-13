import { Construct } from 'constructs';
import { IHome, Platform, Project } from 'pde-core';
import { ShellInstaller } from './shell';

export interface AwsCliInstallerOptions {
  readonly home: IHome;
}

export class AwsCliInstaller extends ShellInstaller {
  constructor(scope: Construct, id: string, options: AwsCliInstallerOptions) {
    const project = Project.of(scope);
    let downloadUrl: string;
    const installCommands: string[] = [];
    const updateCommands: string[] = [];
    if (project.platform === Platform.DARWIN) {
      downloadUrl = 'https://awscli.amazonaws.com/AWSCLIV2.pkg';
      installCommands.push(
        'sudo installer -pkg AWSCLIV2.pkg -target /',
      );
      updateCommands.push(...installCommands);
    } else {
      downloadUrl = 'https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip';
      const installCommand = `./aws/install -i ${options.home.homeLocation}/.local -b ${options.home.homeLocation}/.local/bin`;
      installCommands.push(
        'unzip awscli-exe-linux-x86_64.zip',
        installCommand,
      );
      updateCommands.push(
        installCommand + ' --update',
      );
    }
    super(scope, id, {
      name: 'aws',
      installCommands: installCommands,
      updateCommands: updateCommands,
      downloadUrl: downloadUrl,
    });
  }
}
