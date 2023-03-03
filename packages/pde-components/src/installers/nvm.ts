import { Construct } from 'constructs';
import { Project } from 'pde-core';
import { GitHubRepoInstaller } from './github.js';

export interface NvmInstallerOptions {}

export class NvmInstaller extends GitHubRepoInstaller {
  constructor(scope: Construct, id: string, _options: NvmInstallerOptions = {}) {
    super(scope, id, {
      name: 'nvm',
      repo: 'nvm',
      org: 'nvm-sh',
      folderName: '.nvm',
      uninstallCommands: ['echo "nothing to do here"'],
      installCommands: ['echo "nothing to do here"'],
      versionCommand: 'nvm --version',
    });

    const project = Project.of(this);

    project.profile.addLines([
      `[ -s "${this.absolutePathVar}/nvm.sh" ] && \. "${this.absolutePathVar}/nvm.sh" # This loads nvm`,
    ]);
  }
}
