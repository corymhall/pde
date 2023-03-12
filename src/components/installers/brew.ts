import { Construct } from 'constructs';
import { Installer } from '../../core';

export interface BrewProps {
  readonly pkgName: string;
  readonly version?: string;
}

export class Brew extends Construct {
  public readonly installer: Installer;
  constructor(scope: Construct, id: string, props: BrewProps) {
    super(scope, id);
    const versionsCommand = `brew info ${props.pkgName} --json | jq .'[].versions.stable'`;
    const returnValue = `
  const version = ${versionsCommand}
  const returnValue = JSON.stringify({ name: '${props.pkgName}', version });
  echo\`\$\${returnValue}\`;
`;

    this.installer = new Installer(this, 'aptitude', {
      create: `
  await $\`brew update\`;
  await $\`brew install ${props.pkgName}${props.version ? '@'+props.version : ''}\`;
  ${returnValue}
`,
      delete: `
  await $\`brew uninstall ${props.pkgName}\`;
`,
      read: returnValue,
      update: `
  await $\`brew update\`;
  await $\`brew upgrade ${props.pkgName}${props.version ? '@'+props.version : ''}\`;
`,
    });
  }
}
