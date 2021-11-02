// 🧙 Sum square difference
// https://projecteuler.net/problem=6
// Problem 6
// The sum of the squares of the first ten natural numbers is,
// 1² + 2² + ... + 10² = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)² = 55² = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


// Solution 1: Brute Force Iteration
// This is what I originally thought of and trying it again today that is also what I thought of. No math solutions today, thank you.
// 🥈 Second place
const sumSquareDifferenceBF = function(limit) {
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
console.log(sumSquareDifferenceBF(100));


// Solution 2: Rebel Without a Gauss
// There's a formula for finding the sum of consecutive integers: sum(n) = n(n + 1) / 2.
// There's a formula for finding the sum of squares of consecutive intergers: (2 * n + 1)(n + 1)n / 6.
// 🥇 First place by like a bunch
const sumSquareDifferenceCG = function(limit) {
  const sum = limit * (limit + 1) / 2;
  const sumSq = (2 * limit + 1) * (limit + 1) * limit / 6;
  return sum ** 2 - sumSq;
};

// Solution 2 Tests
console.log(sumSquareDifferenceCG(100));


// 🚀 Performance
// Completely irrelevant loop performance test. It's one thing to know it. It's another thing to actually test it.
//   https://jsben.ch/JDiha
// Also irrelevant JavaScript square test. Math.pow(i, 2) vs. i ** 2 vs. i * i. No clear, consistent winner.
// Although it did appear that i ** 2 or i * i usually won.
//   https://jsben.ch/IimxL
// At 100 the mathematical solution is consistently about 15 to 20% faster.
// At 1000 it's consistently over 3 times faster.
// Carl Gauss is the winner!
//   https://jsben.ch/Wg56e


// 🧠 WIL What I Learned
// Thanks to Carl Guass, there's a formula for finding the sum of consecutive integers: sum(n) = n(n + 1) / 2.
// There's a formula for finding the sum of squares of consecutive intergers: (2 * n + 1)(n + 1)n / 6.


// 📘 Notes
// Apparently Carl Gauss came up with the formula to sum consecutive numbers when he was 8 years old. I was drawing dinosaurs at 8, but ok.
// Couldn't find a wikipedia that had the formula and mentioned him so here's this:
//   https://nrich.maths.org/2478
// https://stackoverflow.com/questions/26593302/whats-the-fastest-way-to-square-a-number-in-javascript/53663890
// https://www.delftstack.com/howto/javascript/javascript-square-a-number/
// 🦖 They were great freaking dinosaurs though. All the other kids asked me to draw dinosaurs for them.
