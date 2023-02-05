import { Construct, IConstruct } from 'constructs';
import { TaskStep } from 'projen';
const INSTALLER_SYMBOL = Symbol.for('pde-core/Installer');

export interface ProjectTask {
  /**
   * The name of the task
   */
  readonly name: string;

  /**
   * A list of task steps
   */
  readonly steps: TaskStep[];

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
  readonly installCommands?: string[];

  /**
   * Any update commands that should be run after the component has been downloaded
   *
   * @default - no update commands are run after downloading
   */
  readonly updateCommands?: string[];
}

export interface IInstaller {
  readonly name: string;

  renderInstall(): InstallerConfig;
}

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
  public abstract readonly name: string;

  protected readonly installCommands: string[];
  protected readonly updateCommands: string[];

  /**
   * Generate install information
   */

  constructor(scope: Construct, id: string, options: InstallerOptions) {
    super(scope, id);
    Object.defineProperty(this, INSTALLER_SYMBOL, { value: true });
    this.installCommands = options.installCommands ?? [];
    this.updateCommands = options.updateCommands ?? [];
  }
  public abstract renderInstall(): InstallerConfig;
}
