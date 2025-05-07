// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber tests
test('valid num (111) 111-1111', () => {
  expect(functions.isPhoneNumber('(111) 111-1111')).toBe(true);
});
test('valid num 111-111-1111', () => {
  expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});
test('invalid num 1112223333', () => {
  expect(functions.isPhoneNumber('1112223333')).toBe(false);
});
test('invalid num blahblahblah', () => {
  expect(functions.isPhoneNumber('blahblahblah')).toBe(false);
});

// isEmail tests
test('valid email blah@test.com', () => {
  expect(functions.isEmail('blah@test.com')).toBe(true);
});
test('valid email blah123@gmail.com', () => {
  expect(functions.isEmail('blah123@gmail.com')).toBe(true);
});
test('invalid email blah.com', () => {
  expect(functions.isEmail('blah.com')).toBe(false);
});
test('invalid email @test.com', () => {
  expect(functions.isEmail('@test.com')).toBe(false);
});

// isStrongPassword tests
test('valid pass Blah123', () => {
  expect(functions.isStrongPassword('Blah123')).toBe(true);
});
test('valid pass Blah123456', () => {
  expect(functions.isStrongPassword('Blah123456')).toBe(true);
});
test('invalid pass abc', () => {
  expect(functions.isStrongPassword('abc')).toBe(false);
});
test('invalid pass 12345', () => {
  expect(functions.isStrongPassword('12345')).toBe(false);
});

// isDate tests
test('valid date 1/1/2020', () => {
  expect(functions.isDate('1/1/2020')).toBe(true);
});
test('valid date 1/1/2023', () => {
  expect(functions.isDate('1/1/2023')).toBe(true);
});
test('invalid date 14/87/25', () => {
  expect(functions.isDate('14/87/25')).toBe(false);
});
test('invalid date 13/32/2020', () => {
  expect(functions.isDate('13/32/2020')).toBe(false);
});

// isHexColor tests
test('valid hex #FFFFFF', () => {
  expect(functions.isHexColor('#FFFFFF')).toBe(true);
});
test('valid hex #FFFF22', () => {
  expect(functions.isHexColor('#FFFF22')).toBe(true);
});
test('invalid hex 12345q', () => {
  expect(functions.isHexColor('12345q')).toBe(false);
});
test('invalid hex #1234', () => {
  expect(functions.isHexColor('#1234')).toBe(false);
});
