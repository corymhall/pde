import { Project } from '../src/project-base';
describe('home', () => {
  test('basic setup', () => {
    new Project({
      name: 'test',
    });
  });
});
