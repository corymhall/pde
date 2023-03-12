import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { Platform, Project, Installer } from '../../core';

export interface AwsCliInstallerOptions { }

export class AwsCliInstaller extends TerraformStack {
  constructor(scope: Construct, id: string, _options: AwsCliInstallerOptions = {}) {
    super(scope, id);
    const project = Project.ofProject(scope);
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
      const installCommand = `./aws/install -i ${project.home.homeLocation}/.local -b ${project.home.homeLocation}/.local/bin`;
      installCommands.push(
        'unzip awscli-exe-linux-x86_64.zip',
        installCommand,
      );
      updateCommands.push(
        installCommand + ' --update',
      );
    }
    const downloadCommand = `curl -OL ${downloadUrl}`;

    new Installer(this, id, {
      create: `
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
      `,
      update: `
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
      `,
      delete: `
        const location = await which('aws');
        await $\`rm -rf \$\${location}\`;
        await $\`rm -rf ${project.home.homeLocation}/.local\`;
      `,
      read: `
        try {
          const location = await which('aws');
          const version = await $\`aws --version\`;
          echo\`{
            location: \$\${location},
            version: \$\${version},
            name: 'aws',
          }\`
        } catch {}
      `,
    });
  }
}
