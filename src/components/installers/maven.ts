import * as path from 'path';
import { Construct } from 'constructs';
import { ShellInstaller } from './shell';
import { Project } from '../../core';

export interface MavenInstallerOptions {
  readonly version: string;
}

export class MavenInstaller extends ShellInstaller {
  constructor(scope: Construct, id: string, options: MavenInstallerOptions) {
    const project = Project.ofProject(scope);
    const location = path.join(project.home.homeLocation, '.local');
    super(scope, id, {
      downloadUrl: `https://dlcdn.apache.org/maven/maven-3/${options.version}/binaries/apache-maven-${options.version}-bin.tar.gz`,
      name: 'mvn',
      installCommands: [
        `sudo tar -C ${location} -xzvf apache-maven-3.8.5-bin.tar.gz`,
      ],
      versionCommand: 'mvn --version',
      uninstallCommands: [
        `rm -rf ${location}`,
      ],
    });

    project.profile.addToSystemPath(path.join(location, 'apache-maven-3.8.5', 'bin'));
  }

}
