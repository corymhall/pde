import { TerraformStack } from 'cdktf';
import { Construct, IConstruct } from 'constructs';

export interface IProfileBase extends IConstruct {
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

export abstract class ProfileBase extends TerraformStack implements IProfileBase {
  protected readonly systemPaths: {[ path: string]: boolean } = {};
  protected readonly systemEnv: {[ name: string]: string } = {};
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  public abstract addLines(lines: string[]): void;

  public addToEnv(name: string, value: string): void {
    this.systemEnv[name] = value;
  }

  public addToSystemPath(systemPath: string): void {
    if (!(systemPath in this.systemPaths)) {
      this.systemPaths[systemPath] = true;
    }
  }

}
