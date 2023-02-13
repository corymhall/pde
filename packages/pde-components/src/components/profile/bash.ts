import { Construct } from 'constructs';
import { IProfile, ProfilesOptions, Profile } from 'pde-core';

export interface BashProfileOptions extends ProfilesOptions {}

export class BashProfile extends Profile implements IProfile {
  constructor(scope: Construct, id: string, options: BashProfileOptions) {
    super(scope, id, options);
    this.addLines([
      '',
      `[ -f ${this.home.homeVar}/.localrc ] && . ${this.home.homeVar}/.localrc`,
    ]);
  }
}

