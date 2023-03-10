/**
 * Chain commands
 */
export function chain(commands: string[], join?: string): string {
  let j = join ?? ' && ';
  return commands.filter(c => !!c).join(j);
}
