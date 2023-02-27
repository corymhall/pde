import { Construct } from 'constructs';
import { Script } from './.gen/providers/shell/script/index.js';

export interface InstallerNewProps {
  create: string;
  delete: string;
  update?: string;
  read?: string;
}

export class InstallerNew extends Script {
  constructor(scope: Construct, id: string, props: InstallerNewProps) {
    super(scope, id, {
      lifecycleCommands: {
        create: createScript(props.create),
        delete: createScript(props.delete),
        read: props.read ? createScript(props.read): undefined,
        update: props.update ? createScript(props.update): undefined,
      },
      interpreter: ['/usr/bin/zsh', '-c']
    });
  }
}

function createScript(script: string): string {
  const prefix = "zx <<'EOF'";
  const postfix = 'EOF';
  return `${prefix}\n${script}\n${postfix}`;
}
