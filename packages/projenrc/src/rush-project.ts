import { Component, Project } from 'projen';
import * as rush from './rush/index.js'

export class RushProject extends Component {
  private readonly projects: rush.RushProject[] = [];
  constructor(project: Project) {
    super(project);
    new rush.PnpmFile(project);
    new rush.RushConfig(project, {
      repository: {
        url: 'https://github.com/corymhall/pde',
      },
      projects: this.projects,
    });
    new rush.PnpmConfig(project);
    new rush.RushBuildCache(project);
    new rush.CommandLine(project);
    new rush.Experiments(project);
  }

  public addProject(project: rush.RushProject): void {
    this.projects.push(project);
  }
}
