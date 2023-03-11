import { cdktf, DependencyType } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';

const project = new cdktf.ConstructLibraryCdktf({
  author: 'corymhall',
  authorAddress: '',
  cdktfVersion: '^0.15',
  defaultReleaseBranch: 'main',
  name: 'pde',
  repositoryUrl: 'https://github.com/corymhall/pde',
  packageManager: NodePackageManager.PNPM,
  release: false,
  projenrcTs: true,
  githubOptions: {
    mergify: false,
    pullRequestLint: false,
  },
  devDeps: [
    '@cdktf/provider-local@^5.0.0',
  ],
  deps: [],
  peerDeps: [
    '@cdktf/provider-local@^5.0.0',
  ],
  bundledDeps: [],
});

project.deps.removeDependency('constructs');
project.deps.addDependency('constructs@10.1.273', DependencyType.PEER);
project.deps.addDependency('constructs@10.1.273', DependencyType.DEVENV);

const gen = project.addTask('gen', {
  condition: 'if [ -d "src/.gen" ]; then exit 1; fi',
  exec: 'npx cdktf provider get scottwinkler/shell --language typescript --output src/.gen',
});

project.defaultTask?.spawn(gen);

project.gitignore.exclude('src/.gen');
project.npmignore?.exclude('bin');

project.synth();
