import { realpathSync } from 'fs';
import * as os from 'os';
import { Construct, IConstruct } from 'constructs';
import { Project as ProjenProject } from 'projen';
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
   * The projen Project that is created by default
   * This can be used to access any projen specific functionality
   */
  public readonly projenProject: ProjenProject;

  /**
   * The absolute directory of the project
   */
  public readonly dir: string;
  public readonly synthesizer: IProjectSynthesizer;


  constructor(props: ProjectProps) {
    super(undefined as any, '');
    Object.defineProperty(this, PROJECT_SYMBOL, { value: true });
    this.name = props.name;

    this.projenProject = new ProjenProject({
      name: props.name,
    });
    this.dir = this.projenProject.outdir;
    // remove all the default tasks since they don't apply to a dotfiles project
    // don't know of a better way of doing this right now.
    this.projenProject.tasks.removeTask('build');
    this.projenProject.tasks.removeTask('package');
    this.projenProject.tasks.removeTask('pre-compile');
    this.projenProject.tasks.removeTask('compile');
    this.projenProject.tasks.removeTask('post-compile');
    this.projenProject.tasks.removeTask('test');
    this.projenProject.tasks.removeTask('eslint');

    // ignore projen files since they will contain hardcoded values
    // for the specific machine
    this.projenProject.addGitIgnore('/.projen/tasks.json');
    this.projenProject.addGitIgnore('/.projen/files.json');
    this.projenProject.addGitIgnore('/.projen/deps.json');

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

  /**
   * @internal
   */
  public _synthProject(): void {
    const installs = installers(this);
    const comps = components(this);
    installs.forEach(e => {
      const config = e.renderInstall();
      config.tasks.forEach(task => {
        this.projenProject.addTask(`${config.name}:${task.name}`, {
          steps: [
            ...task.steps,
          ],
          condition: chain(task.conditions ?? []),
        });

      });
    });
    comps.forEach(comp => comp._preSynthesize());
    this.projenProject.synth();
    comps.forEach(comp => comp._postSynthesize());
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

  /**
   * @internal
   */
  public _preSynthesize(): void {}
  /**
   * @internal
   */
  public _postSynthesize(): void {}
}
// These imports have to be at the end to prevent circular imports
import { Installer } from './installer';
import { DefaultProjectSynthesizer, IProjectSynthesizer } from './synthesizer';
import { chain } from './utils';
