import { Command } from 'commander';

const program = new Command();

program
  .name('pde')
  .description('CLI to do some stuff')
  .version('0.0.0')

program.command('sub');

program.parse();

