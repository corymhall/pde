import { AwsCliInstaller } from 'pde-components';
import { Home, Project } from 'pde-core';
import { TerraformStack } from 'cdktf';
import { ShellProvider } from './.gen/providers/shell/provider/index.js';

const app = new Project({
  name: 'dotfiles',
});
const stack = new TerraformStack(app, 'Local');
const home = new Home(stack, 'home');
new ShellProvider(stack, 'Shell', {
});
new AwsCliInstaller(stack, 'aws', {
  home,
});

app.synth();

