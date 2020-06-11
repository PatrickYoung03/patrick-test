// Fizzbuzz

// • When the integer is divisible by 3 the endpoint returns `Fizz`
// • When the integer is divisible by 5 the endpoint returns `Buzz`
// • When the integer is divisible by both 3 and 5 the endpoint returns `FizzBuzz`

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  return num;
}

module.exports = { fizzbuzz };
