import { Construct } from 'constructs';
import { Installer, LocalFile } from 'pde-core';

export interface PythonGlobalInstallerOptions {
  readonly pythonVersion: string;
  readonly pythonPkgs: string[];
}

export class PythonGlobalInstaller extends Installer {
  public readonly name: string;
  constructor(scope: Construct, id: string, options: PythonGlobalInstallerOptions) {
    super(scope, id, {
      create: `
        cd('$DOTFILES/python')
        await $\`pip install -r requirements.txt\`;
        const version = which(\'python\')
        echo\`{
          version,
          name: 'python-global'
        }\`
      `,
      delete: `
        'echo\`nothing to do here\`',
      `,
    });
    this.name = 'python-global';

    // TODO create a system default virtualenv and use that
    const file = new LocalFile(this, 'python/requirements.txt', {
      filename: 'python/requirements.txt',
      lines: options.pythonPkgs,
    });
    this.addDependsOn(file.resource);
  }
}
