// 🧙 PROBLEM
// https://projecteuler.net/problem=9
// Special Pythagorean triplet
// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a² + b² = c²
// For example, 3² + 4² = 9 + 16 = 25 = 5².
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// SOLUTION 1
// Project Euler's straightforward approach
// This is an ieterative approach and runs on average about 1.5 seconds at s = 1000.
const straighforward = function(s) {
  const lenA = Math.floor((s - 3) / 3); // This is not an integer but it doesn't seem to effect loop performance.
  for (let a = 3; a < lenA; a++) {
    let lenB = (s - 1 - a) / 2;
    for (let b = (a+1); b < lenB; b++) {
      c = s - a - b;
      if (c * c === a * a + b * b) {
        return (a * b * c);
      }
    }
  }
};

// Solution 1 Tests
console.log(straighforward(1000));


// 🚀 PERFORMANCE


// 🧠 WIL WHAT I LEARNED


// 📘 NOTES
