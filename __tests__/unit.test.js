// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  // Should be true
  test('matches (123) 456-7890', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('matches 123-456-7890', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  // Should be false
  test('rejects 1234567890 (missing hyphens)', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
  test('rejects 4567890 (wrong length and format)', () => {
    expect(isPhoneNumber('4567890')).toBe(false);
  });
});

describe('isEmail', () => {
  // Should be true
  test('matches simple email', () => {
    expect(isEmail('user@example.com')).toBe(true);
  });
  test('matches underscore and digits', () => {
    expect(isEmail('user_name123@domain.co')).toBe(true);
  });

  // Should be false
  test('rejects missing @', () => {
    expect(isEmail('userexample.com')).toBe(false);
  });
  test('rejects long TLD', () => {
    expect(isEmail('user@domain.comm')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  // Should be true
  test('starts with letter, length 4', () => {
    expect(isStrongPassword('Abc1')).toBe(true);
  });
  test('includes underscore, length within limit', () => {
    expect(isStrongPassword('Z_user_15')).toBe(true);
  });

  // Should be false
  test('starts with digit', () => {
    expect(isStrongPassword('1Abcdef')).toBe(false);
  });
  test('too long (more than 15 chars)', () => {
    expect(isStrongPassword('A1234567890abcdef')).toBe(false);
  });
});

describe('isDate', () => {
  // Should be true
  test('matches single-digit month/day', () => {
    expect(isDate('1/2/2020')).toBe(true);
  });
  test('matches two-digit month/day', () => {
    expect(isDate('12/31/1999')).toBe(true);
  });

  // Should be false
  test('rejects year with 2 digits', () => {
    expect(isDate('12/31/99')).toBe(false);
  });
  test('rejects missing slashes', () => {
    expect(isDate('12312020')).toBe(false);
  });
});

describe('isHexColor', () => {
  // Should be true
  test('matches 3-digit without #', () => {
    expect(isHexColor('abc')).toBe(true);
  });
  test('matches 6-digit with #', () => {
    expect(isHexColor('#A1B2C3')).toBe(true);
  });

  // Should be false
  test('rejects 4-digit code', () => {
    expect(isHexColor('#abcd')).toBe(false);
  });
  test('rejects non-hex characters', () => {
    expect(isHexColor('#GGG')).toBe(false);
  });
});