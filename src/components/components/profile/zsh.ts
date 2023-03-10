import { Construct } from 'constructs';
import { Profile, IProfile, ProfilesOptions } from '../../../core';
import { GitHubRepoInstaller } from '../../installers/github.js';

export interface ZplugPlugins {
  readonly pluginName: string;
  readonly pluginOptions?: { [key: string]: any };
}

export interface ZshProfileProps {
  readonly zshPlugins?: ZplugPlugins[];
  readonly aliases?: { [key: string]: string };
}
export interface ZshProfileOptions extends ZshProfileProps, ProfilesOptions {}

export interface IZshProfile extends IProfile {
  addAlias(name: string, command: string): void;
}

export class ZshProfile extends Profile implements IZshProfile {
  constructor(scope: Construct, id: string, options: ZshProfileOptions) {
    super(scope, id, options);

    this.addToEnv('ENHANCD_FILTER', 'fzf');
    this.addToEnv('ENHANCD_COMPLETION_BEHAVIOR', 'list');
    this.addToEnv('KEYTIMEOUT', '1');

    const zinit = new GitHubRepoInstaller(this, 'zinit', {
      name: 'zinit',
      org: 'zdharma-continuum',
      branch: 'main',
      folderName: '.zinit',
      repo: 'zinit',
      uninstallCommands: [],
      installCommands: [],
      versionCommand: '',
    });
    this.addToEnv('ZINIT_HOME', zinit.absolutePathVar);

    this.renderPlugins(zinit.absolutePathVar, options.zshPlugins);
    this.renderAliases(options.aliases);
    this.addLines([
      `# To customize prompt, run 'p10k configure' or edit ${this.home.homeVar}/p10k.zsh.`,
      `[[ ! -f ${this.home.homeVar}/p10k.zsh ]] || source ${this.home.homeVar}/p10k.zsh`,
      '',
      'HISTSIZE="10000"',
      'SAVEHIST="10000"',
      '',
      `HISTFILE="${this.home.homeVar}/.zsh_history"`,
      'mkdir -p "$(dirname "$HISTFILE")"',
      'setopt HIST_FCNTL_LOCK',
      'setopt HIST_IGNORE_DUPS',
      'setopt HIST_IGNORE_SPACE',
      'unsetopt HIST_EXPIRE_DUPS_FIRST',
      'setopt SHARE_HISTORY',
      'setopt EXTENDED_HISTORY',
      '# vim mode',
      'bindkey -v',
      "bindkey '^ ' autosuggest-accept",
      "bindkey '^[[A' history-substring-search-up",
      "bindkey '^[[B' history-substring-search-down",
      '',
      '# `v` is already mapped to visual mode, so we need to use a different key to',
      '# # open Vim',
      'bindkey -M vicmd "^V" edit-command-line',
      '',
      '# Load secrets',
      `[ -f ${this.home.homeVar}/.localrc ] && . ${this.home.homeVar}/.localrc`,
    ]);
  }

  public addAlias(name: string, command: string): void {
    this.addLines([
      `alias ${name}='${command}'`,
    ]);
  }

  private renderAliases(aliases?: { [key: string]: string }): void {
    const functionsPath = `${this.home.homeVar}/functions.zsh`;
    this.addLines([
      `[[ ! -f ${functionsPath} ]] || source ${functionsPath}`,
    ]);
    for (const [key, value] of Object.entries(aliases ?? {})) {
      this.addLines([
        `alias ${key}='${value}'`,
      ]);
    }
  }

  private renderPlugins(zplugLocation: string, plugins?: ZplugPlugins[]): void {
    this.addLines([`source ${zplugLocation}/zinit.zsh`]);
    plugins?.forEach(plugin => {
      if (plugin.pluginOptions) {
        const options = ['zinit ice'];
        for (const [key, value] of Object.entries(plugin.pluginOptions)) {
          if (value) {
            options.push(`${key}="${value}"`);
          } else {
            options.push(key);
          }
        }
        this.addLines([options.join(' ')]);
      }
      this.addLines([`zinit light "${plugin.pluginName}"`, '']);
    });
  }
}

