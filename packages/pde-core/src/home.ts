import * as fs from 'fs';
import * as path from 'path';
import { Construct } from 'constructs';
import { Component, IComponent } from './project-base';
const HOME_SYMBOL = Symbol.for('pde-core/Home');

/**
 * Represents the location of a file or directory
 */
interface Location {
  source: string;
  target: string;
  executable?: boolean;
}

/**
 * Represents the users home directory
 */
export interface IHome extends IComponent {
  /**
   * The location where executables live
   */
  readonly binLocation: string;

  /**
   * The users home directory. Defaults to $HOME
   */
  readonly homeLocation: string;

  /**
   * The XDG_CONFIG_HOME location
   */
  readonly xdgConfigHome: string;

  /**
   * The environment variable that holds the path to the users home directory
   * This should be used to represent the home directory in any git tracked
   * files.
   */
  readonly homeVar: string;


  addLocation(source: string, target: string): void;
  addExecutable(source: string, target: string): void;
}

/**
 * Options for the home directory
 */
export interface HomeOptions {
  /**
   * The XDG_CONFIG_HOME location
   *
   * @default '$HOME/.config'
   */
  readonly xdgConfigHome?: string;
}

/**
 * The users home directory
 *
 * This component allows for adding files/directories to home
 */
export class Home extends Component implements IHome {
  public readonly binLocation: string;
  public readonly homeVar: string;
  public readonly homeLocation: string;
  public readonly xdgConfigHome: string;

  private readonly locations: Location[] = [];
  constructor(scope: Construct, id: string, options: HomeOptions = {}) {
    super(scope, id);
    Object.defineProperty(this, HOME_SYMBOL, { value: true });

    if (!process.env.HOME) throw new Error('$HOME must be set');
    this.homeVar = '$HOME';
    this.homeLocation = process.env.HOME;
    this.xdgConfigHome = options.xdgConfigHome ?? '$HOME/.config';


    this.binLocation = path.join(this.homeLocation, '.local', 'bin');
  }

  /**
   * Commands to run after synthesis is complete
   *
   * This will symlink files to the home directory and make
   * executable files executable
   *
   * @internal
   */
  public _postSynthesize(): void {
    this.locations.forEach(location => {
      if (location.executable) {
        fs.chmodSync(location.source, '755');
      }
      // this.dotfileProject.logger.info(`symlinking: ${location.source} -> ${location.target}`);
      try {
        if (fs.lstatSync(location.target).isDirectory()) {
          fs.rmdirSync(location.target);
        } else {
          fs.unlinkSync(location.target);
        }
        fs.symlinkSync(location.source, location.target);
      } catch {
        fs.mkdirSync(path.dirname(location.target), { recursive: true });
        fs.symlinkSync(location.source, location.target);
      }
    });
  }

  /**
   * Add a file or directory to a place within home
   */
  public addLocation(source: string, target: string): void {
    this.locations.push( { source, target: path.join(this.homeLocation, target) });
  }

  /**
   * Add a global executable
   */
  public addExecutable(source: string, target: string): void {
    this.locations.push( { source, target: path.join(this.binLocation, target), executable: true } );
  }
}
