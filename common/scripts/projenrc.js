import { MonorepoRoot, MonorepoTypeScriptProject, NodePackageManager } from '../../packages/projenrc/lib/index.js';

const SHARED_DEPS = [
  'constructs@^10.1.241',
  'projen',
];

const project = new MonorepoRoot({
  defaultReleaseBranch: 'main',
  devDeps: [
    'projen',
  ],
  name: 'pde',
  packageManager: NodePackageManager.PNPM,
  deps: [
    ...SHARED_DEPS,
  ],
  prettier: false,
  release: false,
});

new MonorepoTypeScriptProject({
  packageManager: NodePackageManager.PNPM,
  name: 'projenrc',
  deps: [
    ...SHARED_DEPS,
  ],
  parent: project,
});

const core = new MonorepoTypeScriptProject({
  packageManager: NodePackageManager.PNPM,
  name: 'pde-core',
  deps: [
    'commander',
    'zx',
    'listr2',
    '@cdktf/provider-local',
    'cdktf@^0.15',
    ...SHARED_DEPS,
  ],
  devDeps: [
    'enquirer',
  ],
  parent: project,
});

const cli = new MonorepoTypeScriptProject({
  packageManager: NodePackageManager.PNPM,
  name: 'pde-cli',
  deps: [
    'zx',
    'listr2',
    'commander',
    core,
  ],
  devDeps: [
    'enquirer',
  ],
  parent: project,
});

const components = new MonorepoTypeScriptProject({
  packageManager: NodePackageManager.PNPM,
  name: 'pde-components',
  parent: project,
  deps: [
    'zx',
    'listr2',
    core,
    ...SHARED_DEPS,
  ],
  devDeps: [
    'enquirer',
  ],
});

new MonorepoTypeScriptProject({
  packageManager: NodePackageManager.PNPM,
  name: 'pde-example',
  parent: project,
  deps: [
    'cdktf@^0.15',
    core,
    components,
    cli,
    'constructs',
  ],
});

project.synth();
