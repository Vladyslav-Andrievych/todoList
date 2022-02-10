// eslint-disable-next-line import/extensions
import { counter } from '../createTask.js';

it('Should get enclosed variable', () => {
  const counter1 = counter();

  counter1(); // 6
  counter1(); // 7

  expect(counter1()).toEqual(8);
});

it('Should get independent counters', () => {
  const counter1 = counter();
  const counter2 = counter();

  counter1(); // 6
  counter1(); // 7
  counter2(); // 6

  expect([counter1(), counter2()]).toEqual([8, 7]);
});
