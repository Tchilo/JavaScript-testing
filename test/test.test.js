const sum = require('../js/sum');
const multi = require('../js/multiply');
const sub = require('../js/subtract');
const div = require('../js/divid');
const howLong = require('../js/string');
const caps = require('../js/capital');
const reversString = require('../js/reverseString');

describe('calculate', () => {
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
});

describe('String checks', () => {
  test('return length of string', () => {
    expect(howLong('Taro')).toEqual(4);
  });

  test('first letter is upperCased', () => {
    expect(caps('taro')).toBe('Taro');
  });

  test('Should reverse a string', () => {
    expect(reversString('Taro')).toBe('oraT');
  });
});