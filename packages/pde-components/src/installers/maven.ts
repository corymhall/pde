import * as path from 'path';
import { Construct } from 'constructs';
import { IHome, IProfile } from 'pde-core';
import { ShellInstaller } from './shell.js';

export interface MavenInstallerOptions {
  readonly version: string;
  readonly profile: IProfile;
  readonly home: IHome;
}

export class MavenInstaller extends ShellInstaller {
  constructor(scope: Construct, id: string, options: MavenInstallerOptions) {
    const location = path.join(options.home.homeLocation, '.local');
    super(scope, id, {
      downloadUrl: `https://dlcdn.apache.org/maven/maven-3/${options.version}/binaries/apache-maven-${options.version}-bin.tar.gz`,
      name: 'mvn',
      installCommands: [
        `sudo tar -C ${location} -xzvf apache-maven-3.8.5-bin.tar.gz`,
      ],
      versionCommand: 'mvn --version',
      deleteCommands: [
        `rm -rf ${location}`,
      ],
    });

    options.profile.addToSystemPath(path.join(location, 'apache-maven-3.8.5', 'bin'));
  }

}
