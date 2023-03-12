import * as fs from 'fs';
import * as path from 'path';
import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { Installer, Project } from '../../core';

export interface NpmGlobalInstallerOptions {
  readonly npmPkgs: string[];
}

export class NpmGlobalInstaller extends TerraformStack {
  public readonly name: string;
  constructor(scope: Construct, id: string, options: NpmGlobalInstallerOptions) {
    super(scope, id);
    const npmProjectDir = path.join('$DOTFILES', 'npm');
    const returnValue = (pkg: string) => {
      return `
      const version = await $\`${pkg} --version\`;
      echo\`\$\${JSON.stringify({ version })}\`;
    `;
    } ;
    options.npmPkgs.forEach(pkg => {
      new Installer(this, pkg, {
        create: `
  cd('${npmProjectDir}')
  await $\`npm install ${pkg}\`;
  ${returnValue(pkg)}
`,
        update: `
  cd('${npmProjectDir}')
  await $\`npm install ${pkg}\`;
  ${returnValue(pkg)}
`,
        read: `
  ${returnValue(pkg)}
`,
        delete: `
  await $\`npm uninstall ${pkg}\`;
`,
      });
    });
    const project = Project.ofProject(this);

    this.name = 'npm-global';

    const content = {
      name: 'npm',
      scripts: {},
      dependencies: {},
      main: 'lib/index.js',
      license: 'Apache-2.0',
      version: '0.0.0',
    };

    if (!fs.existsSync(path.join(project.dir, 'npm', 'package.json'))) {
      fs.mkdirSync(path.join(project.dir, 'npm'));
      fs.writeFileSync(path.join(project.dir, 'npm', 'package.json'), JSON.stringify(content, undefined, 2));
    }

    project.profile.addToSystemPath(`${npmProjectDir}/node_modules/.bin`);
  }
}
