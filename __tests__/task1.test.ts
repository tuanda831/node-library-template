import { solution } from '../src/task1';
describe('Test Solution', () => {
  it('should provide a correct answer for ("..xx.x", "x...x.")', () => {
    expect(solution('..xx.x', 'x...x.')).toBe(2);
  });
});
