import * as path from 'path';
import { Construct } from 'constructs';
import { LocalFile, IHome, IProfile, InstallerNew } from 'pde-core';

export interface NpmGlobalInstallerOptions {
  readonly npmPkgs: string[];
  readonly home: IHome;
  readonly profile: IProfile;
}

export class NpmGlobalInstaller extends InstallerNew {
  public readonly name: string;
  constructor(scope: Construct, id: string, options: NpmGlobalInstallerOptions) {
    const npmProjectDir = path.join('$DOTFILES', 'npm');
    const returnValue = `
      const nodeVersion = await $\`node --version\`;
      echo\`{
        nodeVersion,
      }\`;
    `;
    super(scope, id, {
      create: `
        cd('${npmProjectDir}')
        await $\`npm install\`;
        ${returnValue}
      `,
      update: `
        cd('${npmProjectDir}')
        await $\`npm install\`;
        ${returnValue}
      `,
      read: `
        ${returnValue}
      `,
      delete: `
        await $\`rm -rf ${path.join(npmProjectDir, 'node_modules')};
      `,
    });

    this.name = 'npm-global';

    const deps: { [key: string]: string } = options.npmPkgs.reduce((acc, curr) => {
      const s = curr.split('@');
      switch (s.length) {
        case 1:
          acc[s[0]] = '*';
          break;
        case 2:
          acc[s[0]] = s[1];
          break;
        default:
          throw new Error(`Could not parse dependency: ${curr}`);
      }
      return acc;
    }, {} as { [key: string]: string });

    const content = {
      name: 'npm',
      scripts: {},
      dependencies: deps,
      main: 'lib/index.js',
      license: 'Apache-2.0',
      version: '0.0.0',
    };

    new LocalFile(this, this.name, {
      filename: 'package.json',
      lines: [JSON.stringify(content, undefined, 2)],
    });

    options.profile.addToSystemPath(`${npmProjectDir}/node_modules/.bin`);
  }
}
