// https://projecteuler.net/problem=6
// Sum square difference
// Problem 6
// The sum of the squares of the first ten natural numbers is,
// 1² + 2² + ... + 10² = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)² = 55² = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// Solution 1: Brute Force Iteration
// This is what I originally thought of and trying it again today that is also what I thought of. No math solutions today, thank you.
const sumSquareDifference = function(limit) {
  let sumSq = 0,
    sum = 0,
    // This is purely a JavaScript loop performance technique. Hopefully this code is still readable.
    // I'm literally trying to go from 1 to 100, without adding 1 every time and without i <= limit.
    limitPlusOne = limit + 1;
  for (let i = 1; i < limitPlusOne; i++) {
    sum += i;
    sumSq += i ** 2; // i squared
  }
  return sum ** 2 - sumSq;
};

// Solution 1 Tests
console.log(sumSquareDifference(100));

// Performance
// Completely irrelevant loop performance test. It's one thing to know it. It's another thing to actually test it.
//   https://jsben.ch/JDiha
// Also irrelevant JavaScript square test. Math.pow(i, 2) vs. i ** 2 vs. i * i. No clear, consistent winner.
// Although it did appear that i ** 2 or i * i usually won.
//   https://jsben.ch/IimxL

// WIL What I Learned
// Notes
// https://stackoverflow.com/questions/26593302/whats-the-fastest-way-to-square-a-number-in-javascript/53663890
// https://www.delftstack.com/howto/javascript/javascript-square-a-number/
