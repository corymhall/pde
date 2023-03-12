import * as path from 'path';
import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { Aptitude } from './aptitude';
import { Brew } from './brew';
import { GitHubRepoInstaller } from './github';
import { Platform, Project } from '../../core';


export class Neovim extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const commands = [
      'rm -rf $HOME/neovim/share/nvim/runtime',
      'make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/neovim" CMAKE_BUILD_TYPE=Release',
      'make install',
    ];

    const repo = new GitHubRepoInstaller(this, 'neovim', {
      org: 'neovim',
      repo: 'neovim',
      folderName: 'neovim-install',
      installCommands: commands,
      updateCommands: commands,
    });

    const neovimDeps = new TerraformStack(this, 'neovim-deps');
    repo.addDependency(neovimDeps);

    if (Project.ofProject(this).platform === Platform.LINUX) {
      [
        'ninja-build',
        'gettext libtool',
        'libtool-bin',
        'autoconf',
        'automake',
        'cmake',
        'g++',
        'pkg-config',
        'unzip',
        'curl',
        'doxygen',
      ].forEach(dep => {
        new Aptitude(neovimDeps, dep, {
          pkgName: dep,
        });
      });
    } else if (Project.ofProject(this).platform === Platform.DARWIN) {
      [
        'ninja',
        'libtool',
        'automake',
        'cmake',
        'pkg-config',
        'gettext',
        'curl',
      ].forEach(dep => {
        new Brew(neovimDeps, dep, {
          pkgName: dep,
        });
      });
    }

    const project = Project.ofProject(this);
    project.profile.addToSystemPath(path.join(project.home.homeVar, 'neovim', 'bin'));
  }
}
