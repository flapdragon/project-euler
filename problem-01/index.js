// https://projecteuler.net/problem=1
// Multiples of 3 and 5: Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Original solution. Force brute.
// Start at 3 and < 1000 makes sure you only go to 999
// Check for divisibility by 3 or 5 and use addition assignment += for each match
// This sort of accidentally accounts for cases that are divisible by both 3 and 5.
// This solution is so old I was using 4 spaces for indent. I haven't done that for a long time.
// 🏅 Brute force gets an honorable mention
function original() {
  // I'm using var here. Wow. Meeeemorieeees.
  var s = 0;
  // Iteration! Fuck yeah!
  for (var i=3; i < 1000; i++) {
    // If current item is divisble by 3 or 5 evenly
    if (i % 3 === 0 || i % 5 === 0) {
      // Add to sum
      s += i;
    }
  }
  return s;
}

// Solution from Euler with some JavaScript bitwise thrown in to accomplish div or /.
// The bitwise OR operator is faster than Math.floor but you don't even notice it at this magnitude, < 1000.
// I had to go up to 1000000 before I saw a consistent difference.
// So Math.floor is 100% fine for this problem at 1000.
// Just for the record my solution at 1000000 was running at about .05% of the others. Who would have thought looping from 3 to 1000000 would be slow?
// 🥇 1st place
function sumDivisibleBy(n) {
  // Set target, < 1000
  const target = 999;
  // Divide target by number to be divisible by, ignore remainder. Throw that shit away.
  const p = target / n | 0;
  // The sum is the divisible number n times target divided by n, named p, times p + 1, and divide that whole thing by 2.
  return n * (p * (p + 1)) / 2 | 0;
}

// 🥈 Second place
function sumDivisibleByWithFloor(n) {
  // Set target, < 1000
  const target = 999;
  // Divide target by number to be divisible by, ignore remainder. Throw that shit away again.
  const p = Math.floor(target / n);
  // The sum is the divisible number n times target divided by n, named p, times p + 1, and divide that whole thing by 2.
  return Math.floor(n * (p * (p + 1)) / 2);
}

// Tests
// Note: Even thought you're running sumDivisibleBy 3 times to get the answer it still outperforms iteration (in original) by many, many orders of magnitude.
console.log(original());
console.log(sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15));

// What I learned
// 1. To get the sum of a consecutive series of number starting at 1 through p, the formula is (p * (p + 1)) / 2.
// I believe this is because using addition for sum of numbers through 10 it would be (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10) = 55
// and then someone figured out (10 * (10 + 1)) / 2 = 55.
// I either never knew this formula or I forgot it long ago, along with chemistry and physics.
// 2. To get the sum of numbers that are divisible by a number n from a consecutive series of numbers ending in x, the formula
// is based on the one above for a complete consecutive series: p = x \ n, (n * (p * (p + 1)) / 2).
// \ In this case means divide and discard the remainder. Wash your hands of that shit.
// Now how did the person who figured this formula out figure it out? Why were they sitting around doing math? Were they bored before the internet? Shit was it Euler himself?
// Tune in next time.

// Notes
// https://stackoverflow.com/a/1435999/5293704
// https://jsben.ch/ for performance testing.
// 233168
