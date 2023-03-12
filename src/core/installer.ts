import { TerraformResource, TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { ShellProvider } from '../.gen/providers/shell/provider';
import { Script } from '../.gen/providers/shell/script';

export interface InstallerOptions {
  /**
   * This should be the name of the program that is being installed
   */
  readonly name: string;

  /**
   * Any install commands that should be run after the component has been downloaded
   *
   * @default - no install commands are run after downloading
   */
  readonly installCommands: string[];

  /**
   * Commands to run in order to delete the program
   */
  readonly uninstallCommands: string[];

  /**
   * TODO: docs
   *
   * @default - TODO
   */
  readonly versionCommand?: string;

  /**
   * Any update commands that should be run after the component has been downloaded
   *
   * @default - no update commands are run after downloading
   */
  readonly updateCommands?: string[];
}

export interface InstallerProps {
  readonly create: string;
  readonly delete: string;
  readonly update?: string;
  readonly read?: string;
  readonly triggers?: { [key: string]: string };
}

export class Installer extends Construct {
  constructor(scope: Construct, id: string, props: InstallerProps) {
    super(scope, id);

    // TODO update this
    const zsh = '/opt/homebrew/bin/zsh';

    this.getOrCreateProvider();
    new Script(this, 'Installer', {
      triggers: props.triggers,
      lifecycleCommands: {
        create: createScript(props.create, zsh),
        delete: createScript(props.delete, zsh),
        read: props.read ? createScript(props.read, zsh): undefined,
        update: props.update ? createScript(props.update, zsh): undefined,
      },
      interpreter: [zsh, '-c'],
    });
  }

  public addDependsOn(resource: TerraformResource): void {
    TerraformStack.of(this).dependsOn(TerraformStack.of(resource));
  }
  private getOrCreateProvider(): ShellProvider {
    const id = 'ShellProvider';
    const stack = TerraformStack.of(this);
    return stack.node.tryFindChild(id) as ShellProvider ?? new ShellProvider(this, id);
  }
}

function createScript(script: string, zsh: string): string {
  const prefix = `zx <<'EOF'\n$.shell = '${zsh}'`;
  const postfix = 'EOF';
  return `${prefix}\n${script}\n${postfix}`;
}
