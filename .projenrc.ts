import { nx_monorepo } from 'aws-prototyping-sdk';
import { Nx } from 'aws-prototyping-sdk/nx-monorepo';
import { NodePackageManager } from 'projen/lib/javascript';
import { TypeScriptProject } from 'projen/lib/typescript';

export const NX_DEFAULT_OUTPUTS = [
  "{projectRoot}/dist",
  "{projectRoot}/lib",
  "{projectRoot}/build",
  "{projectRoot}/coverage",
  "{projectRoot}/test-reports",
  "{projectRoot}/target",
  "{projectRoot}/LICENSE_THIRD_PARTY",
  "{projectRoot}/.jsii",
];

/**
 * Workspace default NX "build" target
 *
 * @see {@link NxTargetDefaults}
 * @see {@link ProjectTarget}
 */
export const NX_BUILD_TARGET_DEFAULT: Nx.ProjectTarget = {
  outputs: NX_DEFAULT_OUTPUTS,
  dependsOn: [
    {
      target: "build",
      projects: Nx.TargetDependencyProject.DEPENDENCIES,
    },
  ],
};

/**
 * Workspace default NX `targetDefaults`
 *
 * @see {@link NxTargetDefaults}
 */
export const NX_TARGET_DEFAULTS: Nx.TargetDefaults = {
  build: NX_BUILD_TARGET_DEFAULT,
};

const SHARED_DEPS: string[] = [
  'constructs',
  'projen',
];

const project = new nx_monorepo.NxMonorepoProject({
  nxConfig: {
    cacheableOperations: ["build", "test"],
    targetDefaults: NX_TARGET_DEFAULTS,
  },
  defaultReleaseBranch: 'main',
  devDeps: [
    'aws-prototyping-sdk',
    'nx',
    '@nrwl/devkit',
  ],
  name: 'pde',
  packageManager: NodePackageManager.PNPM,
  deps: [
    ...SHARED_DEPS,
  ],
  prettier: false,

  release: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const core = new TypeScriptProject({
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: 'main',
  outdir: 'packages/core',
  name: 'pde-core',
  deps: [
    ...SHARED_DEPS,
  ],
  parent: project,
});

new TypeScriptProject({
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: 'main',
  outdir: 'packages/components',
  name: 'pde-components',
  parent: project,
  deps: [
    core.package.packageName,
    ...SHARED_DEPS,
  ],
});


project.synth();
