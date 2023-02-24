import { realpathSync } from 'fs';
import * as os from 'os';
import { LocalProvider } from '@cdktf/provider-local/lib/provider/index.js';
import { App, TerraformStack } from 'cdktf';
import { Command } from 'commander';
import { Construct, IConstruct } from 'constructs';
const PROJECT_SYMBOL = Symbol.for('pde-core/Project');
const COMPONENT_SYMBOL = Symbol.for('pde-core/Component');
/**
 * The platform that this dotfiles project is installed on
 */
export enum Platform {
  LINUX = 'linux',
  DARWIN = 'darwin',
}

export interface ProjectProps {
  /**
   * The name of the project. This will be the name of the synthesized
   * directory
   */
  readonly name: string;
}

export class Project extends Construct {
  /**
   * Check whether the given construct is a Resource
   */
  public static isProject(construct: IConstruct): construct is Project {
    return construct !== null && typeof(construct) === 'object' && PROJECT_SYMBOL in construct;
  }

  /**
   * Finds a Project construct in the given scope
   */
  public static of(construct: IConstruct): Project {
    const scopes = construct.node.root.node.findAll();
    const project = scopes.find(s => Project.isProject(s));
    if (!project) {
      throw new Error('No parent project found');
    }
    return project as Project;
  }

  /**
   * The name of the project. This will be the name of the synthesized
   * directory
   */
  public readonly name: string;

  /**
   * The platform for this machine
   */
  public readonly platform: Platform;

  /**
   * The absolute path to the systems tmp directory.
   *
   * For example on linux this will be /tmp
   */
  public readonly systemTmpDir: string;

  /**
   * TODO: update
   */
  public readonly stack: TerraformStack;

  /**
   * The absolute directory of the project
   */
  public readonly dir: string;
  public readonly synthesizer: IProjectSynthesizer;

  private readonly app: App;

  public readonly command: Command;


  constructor(props: ProjectProps) {
    super(undefined as any, '');
    Object.defineProperty(this, PROJECT_SYMBOL, { value: true });
    this.name = props.name;
    this.command = new Command('dotfiles');

    this.app = new App();
    this.stack = new TerraformStack(this.app, 'Project');
    new LocalProvider(this.stack, 'LocalProvider');
    this.dir = 'dotfiles';

    this.synthesizer = new DefaultProjectSynthesizer();
    this.synthesizer.bind(this);

    this.platform = this.getPlatform();
    this.systemTmpDir = realpathSync(os.tmpdir());
  }

  private getPlatform(): Platform {
    const platform = os.platform();
    switch (platform) {
      case 'linux':
        return Platform.LINUX;
      case 'darwin':
        return Platform.DARWIN;
      default:
        throw new Error(`${platform} not supported, must be either 'darwin' or 'linux'`);
    };
  }

  public synth(): any {
    this.app.synth();
    const installs = installers(this);
    installs.forEach(e => {
      this.command.addCommand(e.command);
    });
  };

  /**
   * @internal
   */
  public _synthProject(): void {
  }
}

/**
 * Collect all Installers from a Project.
 *
 * @param node Root node to collect all Installers from
 * @param into Array to append Installers to
 * @returns The same array as is being collected into
 */
function installers(node: IConstruct, into: Installer[] = []): Installer[] {
  if (Installer.isInstaller(node)) {
    into.push(node);
  }

  for (const child of node.node.children) {
    // Don't recurse into a subproject
    if (Project.isProject(child)) { continue; }

    installers(child, into);
  }

  return into;
}

/**
 * Collect all Components from a Project.
 *
 * @param node Root node to collect all Cnstallers from
 * @param into Array to append Cnstallers to
 * @returns The same array as is being collected into
 */
// @ts-ignore
function components(node: IConstruct, into: Component[] = []): Component[] {
  if (Component.isComponent(node)) {
    into.push(node);
  }

  for (const child of node.node.children) {
    // Don't recurse into a subproject
    if (Project.isProject(child)) { continue; }

    components(child, into);
  }

  return into;
}

export interface IComponent extends IConstruct {}

export class Component extends Construct implements IComponent {
  /**
   * Check whether the given construct is a Resource
   */
  public static isComponent(construct: IConstruct): construct is Component {
    return construct !== null && typeof(construct) === 'object' && COMPONENT_SYMBOL in construct;
  }

  /**
   * Finds a Project construct in the given scope
   */
  public static of(construct: IConstruct): Component {
    const scopes = construct.node.root.node.findAll();
    const project = scopes.find(s => Component.isComponent(s));
    if (!project) {
      throw new Error('No parent project found');
    }
    return project as Component;
  }

  constructor(scope: Construct, id: string) {
    super(scope, id);
    Object.defineProperty(this, COMPONENT_SYMBOL, { value: true });
  }
}
// These imports have to be at the end to prevent circular imports
import { Installer } from './installer.js';
import { DefaultProjectSynthesizer, IProjectSynthesizer } from './synthesizer.js';
