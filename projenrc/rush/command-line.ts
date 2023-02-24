import { JsonFile, Project } from "projen";

export interface CommandLineConfig {}
export class CommandLine extends JsonFile {
  constructor(project: Project, _options: CommandLineConfig = {}) {
    super(project, 'common/config/rush/command-line.json', {
      allowComments: true,
      committed: true,
      obj: {
        $schema: "https://developer.microsoft.com/json-schemas/rush/v5/rush.schema.json",
        phases: [
          {
            name: '_phase:build',
            dependencies: {
              upstream: ['_phase:build'],
            },
            ignoreMissingScript: true,
            allowWarningsOnSuccess: false,
          },
          {
            name: '_phase:test',
            dependencies: {
              self: ['_phase:build'],
            },
            ignoreMissingScript: true,
            allowWarningsOnSuccess: false,
          },
          {
            name: '_phase:lint',
            ignoreMissingScript: true,
            allowWarningsOnSuccess: false,
          },
        ],
        commands: [
          {
            commandKind: 'phased',
            name: 'build',
            phases: ['_phase:build'],
            enableParallelism: true,
            incremental: true,
          },
          {
            commandKind: 'phased',
            name: 'test',
            summary: 'build and test all projects',
            phases: ['_phase:build', '_phase:test'],
            enableParallelism: true,
            incremental: true,
          },
          {
            commandKind: 'phased',
            name: 'lint',
            summary: 'lint all projects',
            phases: ['_phase:lint'],
            enableParallelism: true,
            incremental: true,
          },
        ],
      }
    });
  }
}


