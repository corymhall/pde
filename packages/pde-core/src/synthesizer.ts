import { Project } from './project-base.js';
/**
 * Encodes information how a certain Project should be deployed
 */
export interface IProjectSynthesizer {
  /**
   * Bind to the stack this environment is going to be used on
   *
   * Must be called before any of the other methods are called.
   */
  bind(project: Project): void;

  /**
   * Synthesize the associated stack to the session
   */
  synthesize(session: ISynthesisSession): void;
}

/**
 * Represents a single session of synthesis. Passed into `Construct.synthesize()` methods.
 */
export interface ISynthesisSession {
  /**
   * The output directory for this synthesis session.
   */
  outdir: string;
}

export class DefaultProjectSynthesizer implements IProjectSynthesizer {
  private _project?: Project;
  bind(project: Project): void {
    this._project = project;

  }
  protected get project(): Project | undefined {
    return this._project;
  }

  synthesize(_session: ISynthesisSession): void {
    assertBound(this.project);
    this.project._synthProject();
  }
}

/**
 * Throw an error message about binding() if we don't have a value for x.
 *
 * This replaces the ! assertions we would need everywhere otherwise.
 */
export function assertBound<A>(x: A | undefined): asserts x is NonNullable<A> {
  if (x === null && x === undefined) {
    throw new Error('You must call bindStack() first');
  }
}
