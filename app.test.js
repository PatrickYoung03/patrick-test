const { fizzbuzz } = require("./app");

// test 1

test("should return 1 when given 1", () => {
  const expected = 1;
  const actual = fizzbuzz(1);
  expect(actual).toEqual(expected);
});

test("should return 2 when given 2", () => {
  const expected = 2;
  const actual = fizzbuzz(2);
  expect(actual).toEqual(expected);
});

test("should return Fizz when given 3", () => {
  const expected = "Fizz";
  const actual = fizzbuzz(3);
  expect(actual).toEqual(expected);
});

test("should return Fizz when given multiple of 3", () => {
  const expected = "Fizz";
  const actual = fizzbuzz(6);
  expect(actual).toEqual(expected);
});

test("shoudl return Buzz when given 5", () => {
  const expected = "Buzz";
  const actual = fizzbuzz(5);
  expect(actual).toEqual(expected);
});

test("should return Buzz given a mutliple of 5", () => {
  const expected = "Buzz";
  const actual = fizzbuzz(10);
  expect(actual).toEqual(expected);
});

test("should return FizzBuzz if given a mutiple of 3 AND 5", () => {
  const expected = "FizzBuzz";
  const actual = fizzbuzz(30);
  expect(actual).toEqual(expected);
});
