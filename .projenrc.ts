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
  devDeps: [
    '@cdktf/provider-local@^5.0.0',
  ],
  deps: [
  ],
  peerDeps: [
    '@cdktf/provider-local@^5.0.0',
  ],
  bundledDeps: [
  ]
});

project.deps.removeDependency('constructs');
project.deps.addDependency('constructs@10.1.273', DependencyType.PEER);
project.deps.addDependency('constructs@10.1.273', DependencyType.DEVENV);

project.synth();
