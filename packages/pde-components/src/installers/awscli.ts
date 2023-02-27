import { Construct } from 'constructs';
import { IHome, Platform, Project, InstallerNew } from 'pde-core';

export interface AwsCliInstallerOptions {
  readonly home: IHome;
}

export class AwsCliInstaller extends InstallerNew {
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
    $.shell = '/usr/bin/zsh';
    const downloadCommand = `curl -OL ${downloadUrl}`;
    const create = () => {
      return `
      cd('${project.systemTmpDir}');
      await $\`${downloadCommand}\`;
      ${installCommands.map(cmd => `await $\`${cmd}\``).join('\n\t')}
      const location = await which('aws');
      const version = await $\`aws --version\`;
      echo\`{
        name: 'aws',
        location: \$\${location},
        version: \$\${version},
      }\`;
      `
    }

    const update = () => {
      return `
      cd('${project.systemTmpDir}');
      await $\`${downloadCommand}\`;
      ${updateCommands.map(cmd => `await $\`${cmd}\``).join('\n\t')}
      const location = await which('aws');
      const version = await $\`aws --version\`;
      echo\`{
        name: 'aws',
        location: \$\${location},
        version: \$\${version},
      }\`;
      `
    }

    const del = () => {
      return `
      const location = await which('aws');
      await $\`rm -rf \$\${location}\`;
      await $\`rm -rf ${options.home.homeLocation}/.local\`;
      `
    }

    const read = () => {
      return `
      try {
        const location = await which('aws');
        const version = await $\`aws --version\`;
        echo\`{
          location: \$\${location},
          version: \$\${version},
          name: 'aws',
        }\`
      } catch {}
      `
    }

    super(scope, id, {
      create: create(),
      update: update(),
      delete: del(),
      read: read(),
    });
  }
}
