import * as comp from 'pde-components';
import { Project } from 'pde-core';
import { TerraformStack } from 'cdktf';
import { ShellProvider } from './.gen/providers/shell/provider/index.js';
import { LocalProvider } from '@cdktf/provider-local/lib/provider/index.js';

const project = new Project({
  name: 'dotfiles',
});
const stack = new TerraformStack(project, 'Local');
new ShellProvider(stack, 'ShellProvider');
new LocalProvider(stack, 'LocalProvider');


const zsh = new comp.ZshProfile(stack, 'Zsh', {
  name: 'zsh',
  profileFileName: '.zshrc',
});

const bash = new comp.BashProfile(stack, 'Bash', {
  name: 'bash',
  profileFileName: '.bashrc',
});

project.profile.register(zsh);
project.profile.register(bash);

project.synth();

