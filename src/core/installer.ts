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
}

export class Installer extends TerraformStack {
  constructor(scope: Construct, id: string, props: InstallerProps) {
    super(scope, id);

    new ShellProvider(this, 'ShellProvider');
    new Script(this, 'Installer', {
      lifecycleCommands: {
        create: createScript(props.create),
        delete: createScript(props.delete),
        read: props.read ? createScript(props.read): undefined,
        update: props.update ? createScript(props.update): undefined,
      },
      interpreter: ['/usr/bin/zsh', '-c'],
    });
  }

  public addDependsOn(resource: TerraformResource): void {
    this.dependsOn(TerraformStack.of(resource));
  }
}

function createScript(script: string): string {
  const prefix = "zx <<'EOF'\n$.shell = '/usr/bin/zsh'";
  const postfix = 'EOF';
  return `${prefix}\n${script}\n${postfix}`;
}
