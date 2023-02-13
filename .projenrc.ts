import { NodePackageManager } from 'projen/lib/javascript';
import { MonorepoRoot, MonorepoTypeScriptProject } from './projenrc/project';

const SHARED_DEPS: string[] = [
  'constructs',
  'projen',
];

const project = new MonorepoRoot({
  defaultReleaseBranch: 'main',
  devDeps: [
    'aws-prototyping-sdk',
    'nx',
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
  name: 'pde-cli',
  bin: {
    pde: './bin/cli',
  },
  deps: [
    'zx',
    'listr2',
    'commander',
  ],
  devDeps: [
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
    'cdktf',
    ...SHARED_DEPS,
  ],
  parent: project,
});

new MonorepoTypeScriptProject({
  packageManager: NodePackageManager.PNPM,
  name: 'pde-components',
  parent: project,
  deps: [
    'zx',
    'listr2',
    core,
    ...SHARED_DEPS,
  ],
});

project.synth();
