import { Construct } from 'constructs';
import { ShellProvider } from '../.gen/providers/shell/provider';
import { Script } from '../.gen/providers/shell/script';

/**
 * Represents the location of a file or directory
 */
export interface LinkProps {
  /**
   * The absolute path to the source location
   */
  readonly source: string;

  /**
   * The relative path to the home directory
   * where the file should be linked.
   */
  readonly target: string;
}

export class Link extends Construct {
  constructor(scope: Construct, id: string, props: LinkProps) {
    super(scope, id);

    new ShellProvider(this, 'ShellProvider');
    new Script(this, 'Installer', {
      triggers: {
        change: Date.now().toString(),
      },
      lifecycleCommands: {
        create: `
zx <<'EOF'
$.shell = 'zsh'
  try {
    if (fs.lstatSync('${props.target}').isDirectory()) {
      fs.rmdirSync('${props.target}');
    } else {
      fs.unlinkSync('${props.target}');
    }
    fs.symlinkSync('${props.source}', '${props.target}');
  } catch {
    fs.mkdirSync(path.dirname('${props.target}'), { recursive: true });
    fs.symlinkSync('${props.source}', '${props.target}');
  }
EOF
`,
        delete: `
zx <<'EOF'
$.shell = 'zsh'
  if (fs.lstatSync('${props.target}').isDirectory()) {
    fs.rmdirSync('${props.target}');
  } else {
    fs.unlinkSync('${props.target}');
  }
EOF
`,
      },
      interpreter: ['zsh', '-c'],
    });
  }
}
