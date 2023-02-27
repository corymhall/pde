import { Command } from 'commander';
import { Construct, IConstruct } from 'constructs';
import { Manager, ListrTask, Logger, ListrDefaultRenderer } from 'listr2';
const INSTALLER_SYMBOL = Symbol.for('pde-core/Installer');

export interface ProjectTask {
  /**
   * The name of the task
   */
  readonly name: string;

  /**
   * A list of task steps
   */
  readonly steps: ListrTask[];

  /**
   * List of conditions that must pass in order to run the task
   */
  readonly conditions?: string[];
}

/**
 * Configuration needed in order to install/update something
 */
export interface InstallerConfig {
  /**
   * The name of the installer
   */
  readonly name: string;

  readonly tasks: ProjectTask[];
}

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
  readonly deleteCommands: string[];

  /**
   * TODO: docs
   *
   * @default - TODO
   */
  readonly versionCommand: string;

  /**
   * Any update commands that should be run after the component has been downloaded
   *
   * @default - no update commands are run after downloading
   */
  readonly updateCommands?: string[];
}

export interface IInstaller {
  readonly name: string;

  get command(): Command;
}

export interface Ctx {}

/**
 * Something that can be installed
 */
export abstract class Installer extends Construct implements IInstaller {
  /**
   * Check whether the given construct is a Resource
   */
  public static isInstaller(construct: IConstruct): construct is Installer {
    return construct !== null && typeof(construct) === 'object' && INSTALLER_SYMBOL in construct;
  }

  /**
   * Finds a Project construct in the given scope
   */
  public static of(construct: IConstruct): Installer {
    const scopes = construct.node.root.node.findAll();
    const project = scopes.find(s => Installer.isInstaller(s));
    if (!project) {
      throw new Error('No parent project found');
    }
    return project as Installer;
  }
  public readonly name: string;

  protected readonly installCommands: string[];
  protected readonly updateCommands: string[];
  protected readonly conditions: string[] = [];
  protected readonly listrs: ListrTask<Ctx, ListrDefaultRenderer>[] = [];
  private readonly manager = new Manager<Ctx>();
  public readonly logger = new Logger();
  private readonly _command: Command;

  /**
   * Generate install information
   */

  constructor(scope: Construct, id: string, options: InstallerOptions) {
    super(scope, id);
    Object.defineProperty(this, INSTALLER_SYMBOL, { value: true });
    this.name = options.name;
    this._command = new Command(this.name);
    this.installCommands = options.installCommands ?? [];
    this.updateCommands = options.updateCommands ?? [];

  }

  public get command(): Command {
    this.listrs.forEach(l =>
      this._command
        .command(l.title!)
        .action(async () => {
          await this.manager.run([l]);
        }),
    );
    return this._command;
  }
}
