const sum = require('../js/sum');
const multi = require('../js/multiply');
const sub = require('../js/subtract');
const div = require('../js/divid');

test('returns sum of a, b', () => {
  expect(sum(1, 2)).toBe(3);
});

test('return multiplied num of a ,b', () => {
  expect(multi(5, 10)).toBe(50);
});

test('return subtracted num of a ,b', () => {
  expect(sub(10, 5)).toBe(5);
});

test('return subtracted num of a ,b', () => {
  expect(div(10, 5)).toBe(2);
});