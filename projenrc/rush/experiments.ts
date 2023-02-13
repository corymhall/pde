import { JsonFile, Project } from "projen";

export interface ExperimentsConfig {}
export class Experiments extends JsonFile {
  constructor(project: Project, _options: ExperimentsConfig = {}) {
    super(project, 'common/config/rush/experiments.json', {
      allowComments: true,
      committed: true,
      obj: {
        $schema: "https://developer.microsoft.com/json-schemas/rush/v5/rush.schema.json",
        phasedCommands: true,
      }
    });
  }
}


