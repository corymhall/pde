import { Construct } from 'constructs';
import { GitHubRepoInstaller, GitHubRepoOptions } from './github';

export interface NvmInstallerOptions extends Pick<GitHubRepoOptions, 'home' | 'profile'> {}

export class NvmInstaller extends GitHubRepoInstaller {
  constructor(scope: Construct, id: string, options: NvmInstallerOptions) {
    super(scope, id, {
      home: options.home,
      name: 'nvm',
      repo: 'nvm',
      org: 'nvm-sh',
      profile: options.profile,
      folderName: '.nvm',
    });

    options.profile.addLines([
      `[ -s "${this.absolutePathVar}/nvm.sh" ] && \. "${this.absolutePathVar}/nvm.sh" # This loads nvm`,
    ]);
  }
}
