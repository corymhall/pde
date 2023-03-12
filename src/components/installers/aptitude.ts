import { Construct } from 'constructs';
import { Installer } from '../../core';

export interface AptitudeProps {
  readonly pkgName: string;
}

export class Aptitude extends Construct {
  public readonly installer: Installer;
  constructor(scope: Construct, id: string, props: AptitudeProps) {
    super(scope, id);
    const versionsCommand = `await $\`aptitude versions ${props.pkgName} --disable-columns -F '%p %V'\`;`;
    const returnValue = `
  const version = ${versionsCommand}
  const returnValue = JSON.stringify({ name: '${props.pkgName}', version });
  echo\`\$\${returnValue}\`;
`;

    this.installer = new Installer(this, 'aptitude', {
      create: `
  await $\`aptitude update\`;
  await $\`aptitude install ${props.pkgName}\`;
  ${returnValue}
`,
      delete: `
  await $\`aptitude purge ${props.pkgName}\`;
`,
      read: returnValue,
      update: `
  await $\`aptitude update\`;
  await $\`aptitude safe-upgrade ${props.pkgName}\`;
`,
    });
  }
}
