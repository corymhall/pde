import { Construct } from 'constructs';
import { Installer, IHome, IProfile, LocalFile } from 'pde-core';
import { $, cd } from 'zx/core';

export interface PythonGlobalInstallerOptions {
  readonly pythonVersion: string;
  readonly pythonPkgs: string[];
  readonly home: IHome;
  readonly profile: IProfile;
}

export class PythonGlobalInstaller extends Installer {
  public readonly name: string;
  constructor(scope: Construct, id: string, options: PythonGlobalInstallerOptions) {
    super(scope, id, {
      name: 'python-global',
    });
    this.name = 'python-global';

    // TODO create a system default virtualenv and use that
    new LocalFile(this, 'python/requirements.txt', {
      filename: 'python/requirements.txt',
      lines: options.pythonPkgs,
    });

    this.listrs.push({
      title: 'install',
      task: async() => {
        cd('$DOTFILES/python');
        await $`pip install -r requirements.txt`;
      },
    });
  }
}
