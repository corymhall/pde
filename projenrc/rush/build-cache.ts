import { JsonFile, Project } from 'projen';
export interface RushBuildCacheOptions {}
export class RushBuildCache extends JsonFile {
  constructor(project: Project, _options: RushBuildCacheOptions = {}) {
    super(project, 'common/config/rush/build-cache.json', {
      allowComments: true,
      committed: true,
      obj: {
        $schema: "https://developer.microsoft.com/json-schemas/rush/v5/rush.schema.json",
        buildCacheEnabled: true,
        cacheProvider: 'local-only', // 'amazon-s3',
      }
    });
  }
}
