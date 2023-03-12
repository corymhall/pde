import * as path from 'path';
import { Construct } from 'constructs';
import { IHome } from './home';
import { IProfileBase, ProfileBase } from './profile-base';
import { Project } from './project-base';
import { LocalFile } from './textfile';


/**
 * Represents a system profile
 * i.e. bash, zsh, etc
 */
export interface IProfile extends IProfileBase {
  /**
   * The name of the profile file
   *
   * e.g. .zshrc, .bashrc, etc
   */
  readonly profileFileName: string;
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
   * An initial set of environment variables to source
   */
  readonly env?: { [key: string]: string };
}

export class Profile extends ProfileBase implements IProfile {
  public readonly profileFileName: string;

  protected readonly systemPaths: {[ path: string]: boolean } = {};
  protected readonly systemEnv: {[ name: string]: string } = {};
  protected readonly project: Project;
  protected readonly home: IHome;

  protected readonly file: LocalFile;


  constructor(scope: Construct, id: string, options: ProfilesOptions) {
    super(scope, id);
    this.project = Project.ofProject(this);
    this.home = this.project.home;

    this.profileFileName = options.profileFileName;
    this.file = new LocalFile(this, options.name, {
      filename: path.join(this.project.dir, `${options.name}/${options.profileFileName}`),
      lines: [
        '# -----------------------------------------------------',
        '# ----------------Common Profile Config----------------',
        '# -----------------------------------------------------',
        'test -d "$HOME/.tea" && source <("$HOME/.tea/tea.xyz/v*/bin/tea" --magic=zsh --silent)',
      ],
    });
    this.renderEnv(options.env);
    this.home.addLocation(this.file, options.name, {
      source: this.file.path,
      target: `${this.profileFileName}`,
    });
  }
  public addLines(lines: string[]): void {
    lines.forEach(line => this.file.addLine(line));
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
