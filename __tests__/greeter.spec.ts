import { Greeter } from './../src/greeter';

describe('init', () => {
  test('should greet', () => {
    const greeter: Greeter = new Greeter();

    const message = greeter.createGreeting('Hello, there');

    expect(message).toBe('Hello, there');
  });
});
