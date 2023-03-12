import * as path from 'path';
import { Construct } from 'constructs';
import { LocalFile, Platform, Project } from '../../core';
import { TerraformStack } from 'cdktf';

export class GitConfig extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const project = Project.ofProject(this);
    const stack = new TerraformStack(this, 'git-config');
    const gitMessage = new LocalFile(stack, 'gitmessage', {
      filename: path.join(project.dir, 'git', 'gitmessage'),
      lines: [
        '# Header - #',
        '# <type>(<scope>): <subject>',
        '# No more than 80 chars. #### 80 chars is ############################## here: #',
        '',
        '# Remember blank line between title and body.',
        '',
        '# Body',
        '# The body should include the motivation for the change and contrast this with previous behavior.',
        '# Wrap at 72 chars. ################################## which is here: #',
        '#',
        '',
        '# Footer',
        '# The footer should contain any information about Breaking Changes and is also the place',
        '# to reference GitHub issues that this commit closes.',
        '# BREAKING CHANGE: ...',
        '# Closes #123, #124',
        '# re #123, #124',
      ],
    });
    project.home.addLocation(stack, 'gitmessage', {
      source: gitMessage.path,
      target: '.gitmessage',
    });

    const macGpgProgram = '/opt/homebrew/bin/pinentry-mac';
    const devBoxGpgProgram = `${project.home.binLocation}/gpg-program`;
    const gpgFile = new LocalFile(stack, 'gpg-agent', {
      filename: path.join(project.dir, 'gnupg', 'gpg-agent.conf'),
      lines: [
        'default-cache-ttl 28800',
        'max-cache-ttl 28800',
        `pinentry-program ${project.platform === Platform.LINUX ? devBoxGpgProgram : macGpgProgram}`,
      ],
    });
    project.home.addLocation(stack, 'gpgfile', {
      source: gpgFile.path,
      target: path.join('.gnupg', 'gpg-agent.conf'),
    });

    const devboxKey = 'F54E7085E1F00BDE';
    const macKey = '52D5432CFA09862D';
    const githubConfig = new LocalFile(stack, 'github-config', {
      filename: path.join(project.dir, 'git', 'github.config'),
      lines: [
        '[commit]',
        '  template = "~/.gitmessage"',
        '  gpgsign = true',
        '',
        '[user]',
        '  email = "43035978+corymhall@users.noreply.github.com"',
        '  name = "corymhall"',
        `  signingkey = "${project.platform === Platform.LINUX ? devboxKey : macKey}"`,
        '[gpg]',
        `  program = ${project.platform === Platform.LINUX ? devBoxGpgProgram : 'gpg'}`,
      ],
    });
    project.home.addLocation(stack, 'githubconfig', {
      source: githubConfig.path,
      target: path.join('.config', 'git', 'github.config'),
    });

    const workConfig = new LocalFile(stack, 'git-work-config', {
      filename: path.join(project.dir, 'git/work.conf'),
      lines: [
        '[commit]',
        '  template = "~/.gitmessage"',
        '',
        '[user]',
        '  email = "hallcor@amazon.com"',
        '  name = "Cory Hall"',
      ],
    });
    project.home.addLocation(stack, 'workconfig', {
      source: workConfig.path,
      target: path.join('.config', 'git', 'amazon.config'),
    });

    const gitConfig = new LocalFile(stack, 'git-config', {
      filename: path.join(project.dir, 'git', 'config'),
      lines: [
        '',
        '[core]',
        '  editor = "nvim"',
        '',
        '[credential]',
        '  helper = "store"',
        '',
        '[diff]',
        '',
        '[fetch]',
        '  prune = true',
        '',
        '[github]',
        '  user = "corymhall"',
        '',
        '[init]',
        '  defaultBranch = "main"',
        '',
        '[pull]',
        '  rebase = true',
        '',
        '[push]',
        '  default = "simple"',
        '  autoSetupRemote = true',
        '',
        '[includeIf "gitdir:~/"]',
        `  path = ${githubConfig.path}`,
        '[includeIf "gitdir:~/workplace/"]',
        `  path = ${workConfig.path}`,
      ],
    });
    project.home.addLocation(stack, 'gitconfig', {
      source: gitConfig.path,
      target: path.join('.config', 'git', 'config'),
    });

  }
}
