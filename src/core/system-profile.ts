import { Aspects } from 'cdktf';
import { Construct, IConstruct } from 'constructs';
import { IHome } from './home';
import { IProfile } from './profile';
import { IProfileBase } from './profile-base';
const PROFILE_SYMBOL = Symbol.for('pde-core/SystemProfile');


export interface ISystemProfile extends IProfileBase {
  /**
   * TODO: docs
   */
  register(profile: IProfile): void;

  addAlias(name: string, command: string): void;
}

export interface SystemProfileOptions {
  readonly home: IHome;
  /**
   * An initial set of environment variables to source
   */
  readonly env?: { [key: string]: string };
}

export class SystemProfile extends Construct implements ISystemProfile {
  /**
   * Check whether the given construct is a Profile
   */
  public static isSystemProfile(construct: IConstruct): construct is SystemProfile {
    return construct !== null && typeof(construct) === 'object' && PROFILE_SYMBOL in construct;
  }

  /**
   * Finds a Profile construct in the given scope
   */
  public static of(construct: IConstruct): SystemProfile {
    const scopes = construct.node.root.node.findAll();
    const profile = scopes.find(s => SystemProfile.isSystemProfile(s));
    if (!profile) {
      throw new Error('No parent Home found');
    }
    return profile as SystemProfile;
  }

  private readonly profiles: IProfile[] = [];
  private readonly lines: string[];
  private readonly systemPaths: {[ path: string]: boolean } = {};
  private readonly systemEnv: {[ name: string]: string } = {};

  constructor(scope: Construct, id: string, options: SystemProfileOptions) {
    super(scope, id);
    this.lines = [
      '# -----------------------------------------------------',
      '# ----------------Common Profile Config----------------',
      '# -----------------------------------------------------',
    ];
    this.addToEnv('XDG_CONFIG_HOME', options.home.xdgConfigHome);
    Object.defineProperty(this, PROFILE_SYMBOL, { value: true });
    for (const [key, value] of Object.entries(options.env ?? {})) {
      this.addToEnv(key, value);
    }
    const that = this;
    Aspects.of(this).add({
      visit(node: IConstruct) {
        if (node.node.id === that.node.id) {
          const profile = node as SystemProfile;
          profile.profiles.forEach(p => {
            p.addLines(that.lines);
            for (const [key, value] of Object.entries(that.systemEnv)) {
              p.addToEnv(key, value);
            }
            Object.keys(that.systemPaths).forEach(s => p.addToSystemPath(s));
          });
        }
      },
    });
  }

  public addAlias(name: string, command: string): void {
    this.addLines([
      `alias ${name}='${command}'`,
    ]);
  }

  public addLines(lines: string[]): void {
    this.lines.push(...lines);
  }

  public register(profile: IProfile): void {
    this.profiles.push(profile);
  }

  public addToEnv(name: string, value: string): void {
    this.systemEnv[name] = value;
  }

  public addToSystemPath(systemPath: string): void {
    if (!(systemPath in this.systemPaths)) {
      this.systemPaths[systemPath] = true;
    }
  }
}
