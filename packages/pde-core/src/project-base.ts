import { realpathSync } from 'fs';
import 'zx/globals';
import * as os from 'os';
import { App } from 'cdktf';
import { IConstruct } from 'constructs';
import { Home, IHome } from './home.js';
import { ISystemProfile, SystemProfile } from './system-profile.js';
const PROJECT_SYMBOL = Symbol.for('pde-core/Project');
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

  readonly home?: IHome;

  readonly profile?: ISystemProfile;
}

export class Project extends App {
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
   * The absolute directory of the project
   */
  public readonly dir: string;

  public readonly profile: ISystemProfile;
  public readonly home: IHome;

  constructor(props: ProjectProps) {
    super();
    Object.defineProperty(this, PROJECT_SYMBOL, { value: true });
    this.name = props.name;
    this.home = props.home ?? new Home(this, 'Home');
    this.profile = props.profile ?? new SystemProfile(this, 'SystemProfile', {
      home: this.home,
    });

    this.dir = 'dotfiles';

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
}
