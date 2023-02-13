import { Construct } from 'constructs';
import { Project, Installer, InstallerConfig, IHome, IProfile } from 'pde-core';
import { TextFile } from 'projen';

export interface PythonGlobalInstallerOptions {
  readonly pythonVersion: string;
  readonly pythonPkgs: string[];
  readonly home: IHome;
  readonly profile: IProfile;
}

export class PythonGlobalInstaller extends Installer {
  public readonly name: string;
  private readonly project: Project;
  private readonly pythonVersion: string;
  private readonly pythonProjectDir: string;
  constructor(scope: Construct, id: string, options: PythonGlobalInstallerOptions) {
    super(scope, id, {
      name: 'python-global',
    });
    this.project = Project.of(this);
    this.name = 'python-global';
    this.pythonVersion = options.pythonVersion;

    // TODO: need to install pyenv

    const pythonProject = new TextFile(this.project.projenProject as any, 'python/requirements.txt', {
      lines: options.pythonPkgs,
      readonly: false,
    });

    this.pythonProjectDir = pythonProject.absolutePath;

    options.profile.addLines([
      'eval "$(pyenv init --path)"',
      'eval "$(pyenv init -)"',
    ]);
  }

  public renderInstall(): InstallerConfig {
    return {
      name: this.name,
      tasks: [
        {
          name: 'pyenv:install',
          conditions: [
            `if python --version 2>&1 | grep -q '^Python ${this.pythonVersion}';then exit 1; else exit 0; fi`,
          ],
          steps: [
            {
              exec: `pyenv install ${this.pythonVersion} && pyenv global ${this.pythonVersion}`,
            },
          ],
        },
        {
          name: 'install',
          steps: [
            {
              exec: 'pip install -r requirements.txt',
              cwd: this.pythonProjectDir,
            },
          ],
        },
      ],
    };

  }
}
