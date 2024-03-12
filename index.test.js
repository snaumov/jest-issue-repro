import { tested } from "./index";

describe('Test', () => {
  it('should return tested', () => {
    expect(tested()).toBe('tested');
  });
});