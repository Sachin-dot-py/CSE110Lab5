// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//Phone number tests
test('bad phone number #1', () => {
  expect(isPhoneNumber("8423941943824189349281389")).toBe(false);
});

test('bad phone number #2', () => {
  expect(isPhoneNumber("1")).toBe(false);
});

test('good phone number #1', () => {
  expect(isPhoneNumber("(111) 111-1111")).toBe(true);
});

test('good phone number #2', () => {
  expect(isPhoneNumber("(222) 222-2222")).toBe(true);
});





//Email tests 
test('bad email #1', () => {
  expect(isEmail("THIS IS NOT AN EMAIL HAHAHAHAHAHA")).toBe(false);
});

test('bad email #2', () => {
  expect(isEmail("@@@@@@@@@@@")).toBe(false);
});

test('good email #1', () => {
  expect(isEmail("johndoe@gmail.com")).toBe(true);
});

test('good email #2', () => {
  expect(isEmail("mychemicalromance@gerardway.com")).toBe(true);
});






//isStrongPassword
test('bad password #1', () => {
  expect(isStrongPassword("blink 182")).toBe(false);
});

test('bad password #2', () => {
  expect(isStrongPassword("123")).toBe(false);
});

test('good password #1', () => {
  expect(isStrongPassword("askfmdsalkfmdlaskmdflkaflmsd")).toBe(false);
});

test('good password #2', () => {
  expect(isStrongPassword("th15154G00Dp455W0RD!@")).toBe(false);
});






//Date Tests
test('bad date #1', () => {
  expect(isStrongPassword("blink 182")).toBe(false);
});

test('bad date #2', () => {
  expect(isStrongPassword("123")).toBe(false);
});

test('good date #1', () => {
  expect(isStrongPassword("askfmdsalkfmdlaskmdflkaflmsd")).toBe(false);
});

test('good date #2', () => {
  expect(isStrongPassword("th15154G00Dp455W0RD!@")).toBe(false);
});




//Hex Color Tests
test('bad hex color #1', () => {
  expect(isHexColor("THIS IS NOT A COLOR HAHAHAHAHAHA")).toBe(false);
});

test('bad hex color #2', () => {
  expect(isHexColor("blue! :D")).toBe(false);
});

test('good hex color #1', () => {
  expect(isHexColor("#eb4034")).toBe(true);
});

test('good hex color #1', () => {
  expect(isHexColor("#34ebcc")).toBe(true);
});