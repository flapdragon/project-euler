// https://projecteuler.net/problem=1
// Multiples of 3 and 5: Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Original solution. Force brute.
// Start at 3 and < 1000 makes sure you only go to 999
// Check for divisibility by 3 or 5 and use addition assignment += for each match
// This sort of accidentally accounts for cases that are divisible by both 3 and 5.
// 🏅 Brute force gets an honorable mention
function original() {
  var s = 0;
  for (var i=3; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          s += i;
      }
  }
  return s;
}

// Solution from Euler with some JavaScript bitwise thrown in to accomplish div or /.
// The bitwise OR operator is faster than Math.floor but you don't even notice it at this magnitude, < 1000.
// I had to go up to 1000000 before I saw a consistent difference.
// So Math.floor is 100% fine for this problem.
// Just for the record my solution at 1000000 was running at about .05% of the others. Who would have thought looping from 3 to 1000000 would be slow?
// 🥇 1st place
function sumDivisibleBy(n) {
  const target = 999;
  const p = target / n | 0;
  return n * (p * (p + 1)) / 2 | 0;
}

// 🥈 Second place
function sumDivisibleByWithFloor(n) {
  const target = 999999;
  const p = Math.floor(target / n);
  return Math.floor(n * (p * (p + 1)) / 2);
}

// Tests
// Note: Even thought you're running sumDivisibleBy 3 times to get the answer it still outperforms iteration (in original) by many, many orders of magnitude.
console.log(original());
console.log(sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15));

// Notes
// https://stackoverflow.com/a/1435999/5293704
// https://jsben.ch/ for performance testing.
// 233168
