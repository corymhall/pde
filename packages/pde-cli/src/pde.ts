import * as commander from 'commander';
import { Project } from 'pde-core';

class PdeCommand extends commander.Command {
  createCommand(name: string) {
    const cmd = new PdeCommand(name);
    return cmd;
  }
};

export class Pde {
  public readonly cmd: commander.Command;
  constructor() {
    this.cmd = new PdeCommand('pde');
  }

  public register(project: Project): void {
    project.synth();
    this.cmd.addCommand(project.command);
  }
}
