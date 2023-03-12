import * as path from 'path';
import { Construct, IConstruct } from 'constructs';
import { Link, LinkProps } from './link';
const HOME_SYMBOL = Symbol.for('pde-core/Home');


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


  addLocation(scope: Construct, id: string, props: LinkProps): void;
  addExecutable(scope: Construct, id: string, props: LinkProps): void;
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

  constructor(scope: Construct, id: string, options: HomeOptions = {}) {
    super(scope, id);
    Object.defineProperty(this, HOME_SYMBOL, { value: true });

    if (!process.env.HOME) throw new Error('$HOME must be set');
    this.homeVar = '$HOME/tmp';
    this.homeLocation = process.env.HOME+'/tmp';
    this.xdgConfigHome = options.xdgConfigHome ?? '$HOME/tmp/.config';
    this.binLocation = path.join(this.homeLocation, '.local', 'bin');
  }

  /**
   * Add a file or directory to a place within home
   */
  public addLocation(scope: Construct, id: string, props: LinkProps): void {
    new Link(scope, 'link'+id, {
      target: path.join(this.homeLocation, props.target),
      source: props.source,
    });
  }
  /**
   * Add a global executable
   */
  public addExecutable(scope: Construct, id: string, props: LinkProps): void {
    new Link(scope, 'link'+id, {
      target: path.join(this.binLocation, props.target),
      source: props.source,
    });
  }
}

