import * as path from 'path';
import { Construct, IConstruct } from 'constructs';
import { Lazy, TerraformStack } from 'cdktf';
import { Installer } from './installer.js';
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
export interface IHome extends IConstruct {
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


  addLocation(scope: Construct, source: string, target: string): void;
  addExecutable(scope: Construct, source: string, target: string): void;
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
export class Home extends Construct implements IHome {
  public readonly binLocation: string;
  public readonly homeVar: string;
  public readonly homeLocation: string;
  public readonly xdgConfigHome: string;

  private readonly locations: Location[] = [];
  private readonly stack: TerraformStack;
  constructor(scope: Construct, id: string, options: HomeOptions = {}) {
    super(scope, id);
    Object.defineProperty(this, HOME_SYMBOL, { value: true });

    if (!process.env.HOME) throw new Error('$HOME must be set');
    this.homeVar = '$HOME';
    this.homeLocation = process.env.HOME+'/tmp';
    this.xdgConfigHome = options.xdgConfigHome ?? '$HOME/tmp/.config';


    this.binLocation = path.join(this.homeLocation, '.local', 'bin');
    const that = this;
    this.stack = new Installer(this, 'home', {
      create: Lazy.stringValue({
        produce() {
          return `
            const locations = [...${that.locations}];
            this.locations.forEach(location => {
              if (location.executable) {
                fs.chmodSync(location.source, '755');
              }
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
          `;
        },
      }),
      delete: Lazy.stringValue({
        produce() {
          return `
            const locations = [...${that.locations}];
            this.locations.forEach(location => {
              try {
                if (fs.lstatSync(location.target).isDirectory()) {
                  fs.rmdirSync(location.target);
                } else {
                  fs.unlinkSync(location.target);
                }
              } catch { }
          `;
        },
      }),
    });
  }

  /**
   * Add a file or directory to a place within home
   */
  public addLocation(scope: Construct, source: string, target: string): void {
    this.stack.dependsOn(TerraformStack.of(scope));
    this.locations.push( { source, target: path.join(this.homeLocation, target) });
  }

  /**
   * Add a global executable
   */
  public addExecutable(scope: Construct, source: string, target: string): void {
    this.stack.dependsOn(TerraformStack.of(scope));
    this.locations.push( { source, target: path.join(this.binLocation, target), executable: true } );
  }
}

