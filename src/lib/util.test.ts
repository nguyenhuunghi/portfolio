import { validateEmail, sanitizeInput } from './util';

describe('validateEmail', () => {
  it('should validate correct email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });
  it('should invalidate incorrect email', () => {
    expect(validateEmail('test@com')).toBe(false);
    expect(validateEmail('test@.com')).toBe(false);
    expect(validateEmail('test.com')).toBe(false);
  });
});

describe('sanitizeInput', () => {
  it('should trim and remove angle brackets', () => {
    expect(sanitizeInput('  <hello>  ')).toBe('hello');
    expect(sanitizeInput('world')).toBe('world');
  });
});
