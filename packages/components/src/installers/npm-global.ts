import * as path from 'path';
import { Construct } from 'constructs';
import { Project, Installer, InstallerConfig, IHome, IProfile } from 'pde-core';
import { Project as ProjenProject } from 'projen';
import { NodePackage } from 'projen/lib/javascript';
import { GitHubRepoInstaller } from './github';

export interface NpmGlobalInstallerOptions {
  readonly nodeVersion: string;
  readonly npmPkgs: string[];
  readonly home: IHome;
  readonly profile: IProfile;
}

export class NpmGlobalInstaller extends Installer {
  public readonly name: string;
  private readonly project: Project;
  private readonly npmProjectDir: string;
  private readonly nodeVersion: string;
  private readonly nvmPath: string;
  constructor(scope: Construct, id: string, options: NpmGlobalInstallerOptions) {
    super(scope, id, {
      name: 'npm-global',
    });

    this.name = 'npm-global';
    this.nodeVersion = options.nodeVersion;

    this.project = Project.of(this);

    // TODO: break this out into it's own component
    const nvm = new GitHubRepoInstaller(this, 'nvm-sh-nvm', {
      org: 'nvm-sh',
      repo: 'nvm',
      home: options.home,
      name: 'nvm',
      profile: options.profile,
      folderName: '.nvm',
    });
    this.nvmPath = nvm.absolutePathVar;

    const npmProject = new ProjenProject({
      name: 'npm',
      outdir: 'npm',
      parent: this.project.projenProject as any, // TODO: remove the any cast here
    });

    const nodePkg = new NodePackage(npmProject);
    nodePkg.addDeps(...options.npmPkgs);
    this.npmProjectDir = npmProject.outdir;

    options.profile.addToSystemPath(`${this.npmProjectDir}/node_modules/.bin`);
    options.profile.addLines([
      `[ -s "${nvm.absolutePathVar}/nvm.sh" ] && \. "${nvm.absolutePathVar}/nvm.sh" # This loads nvm`,
    ]);
  }

  public renderInstall(): InstallerConfig {
    return {
      name: this.name,
      tasks: [
        {
          name: 'nvm:node:install',
          conditions: [
            `if node --version 2>&1 | grep -q '^v${this.nodeVersion}';then exit 1; else exit 0; fi`,
          ],
          steps: [
            {
              exec: `. ${path.join(this.nvmPath, 'nvm.sh')} && nvm install ${this.nodeVersion}`,
            },
          ],
        },
        {
          name: 'install',
          steps: [
            {
              exec: 'npm install',
              cwd: this.npmProjectDir,
            },
          ],
        },
      ],
    };

  }
}
