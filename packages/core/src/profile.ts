import * as path from 'path';
import { Construct, IConstruct } from 'constructs';
import { TextFile } from 'projen';
import { IHome } from './home';
import { Project } from './project-base';
const PROFILE_SYMBOL = Symbol.for('pde-core/Profile');

/**
 * Represents a system profile
 * i.e. bash, zsh, etc
 */
export interface IProfile {
  /**
   * The name of the profile file
   *
   * e.g. .zshrc, .bashrc, etc
   */
  readonly profileFileName: string;

  /**
   * Add additional lines to the system profile
   */
  addLines(lines: string[]): void;

  /**
   * Add additional environment variables
   */
  addToEnv(name: string, value: string): void;

  /**
   * Add additional paths to the system PATH
   */
  addToSystemPath(systemPath: string): void;
}

/**
 * Options for creating a profile file
 */
export interface ProfilesOptions {
  /**
   * The name of the profile
   */
  readonly name: string;

  /**
   * The file name of the profile
   */
  readonly profileFileName: string;

  /**
   * The Home to associate this profile with
   */
  readonly home: IHome;

  /**
   * An initial set of environment variables to source
   */
  readonly env?: { [key: string]: string };

}

export class Profile extends Construct implements IProfile {
  /**
   * Check whether the given construct is a Profile
   */
  public static isProfile(construct: IConstruct): construct is Profile {
    return construct !== null && typeof(construct) === 'object' && PROFILE_SYMBOL in construct;
  }

  /**
   * Finds a Profile construct in the given scope
   */
  public static of(construct: IConstruct): Profile {
    const scopes = construct.node.root.node.findAll();
    const profile = scopes.find(s => Profile.isProfile(s));
    if (!profile) {
      throw new Error('No parent Home found');
    }
    return profile as Profile;
  }

  public readonly profileFileName: string;

  protected readonly systemPaths: {[ path: string]: boolean } = {};
  protected readonly systemEnv: {[ name: string]: string } = {};
  protected readonly project: Project;
  protected readonly home: IHome;

  private readonly file: TextFile;


  constructor(scope: Construct, id: string, options: ProfilesOptions) {
    super(scope, id);
    this.home = options.home;
    this.project = Project.of(this);

    this.profileFileName = options.profileFileName;
    this.file = new TextFile(this.project.projenProject, `${options.name}/${options.profileFileName}`, {
      lines: [
        '# -----------------------------------------------------',
        '# ----------------Common Profile Config----------------',
        '# -----------------------------------------------------',
      ],
    });
    this.renderEnv(options.env);
    this.addToEnv('XDG_CONFIG_HOME', this.home.xdgConfigHome);
    const sourcePath = path.join(this.project.dir, this.file.path);
    this.home.addLocation(sourcePath, `.${path.basename(sourcePath)}`);
  }

  public addLines(lines: string[]): void {
    lines.forEach(line => this.file.addLine(line));
  }

  public addToEnv(name: string, value: string): void {
    this.systemEnv[name] = value;
  }

  public addToSystemPath(systemPath: string): void {
    if (!(systemPath in this.systemPaths)) {
      this.systemPaths[systemPath] = true;
    }
  }

  protected renderEnvExports(): void {
    for (const [key, value] of Object.entries(this.systemEnv)) {
      this.file.addLine(
        `export ${key}="${value}"`,
      );
    }
  }

  protected renderEnv(env?: { [key: string]: string }): void {
    for (const [key, value] of Object.entries(env ?? {})) {
      this.systemEnv[key] = value;
    }
  }

  protected renderPathExports(): void {
    Object.keys(this.systemPaths).forEach(p => {
      let systemPath = p;
      if (p.startsWith(this.home.homeLocation)) {
        systemPath = p.replace(this.home.homeLocation, this.home.homeVar);
      }
      this.file.addLine(`export PATH=${systemPath}:$PATH`);
    });
  }
}
