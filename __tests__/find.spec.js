import { find } from '../lib/find';

String.prototype.find = find;

test('', ()=> {
  const result = 'davy engone'.find('ya');
  console.log(result);
  expect(typeof find).toBe('function');
});
