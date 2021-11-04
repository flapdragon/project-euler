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
// 🥈 Second place
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


// SOLUTION 2
// 🥇 First place
// This approach uses parameterization. It consistently runs under .1 ms at a+b+c=1000.
const parameterization = function(s) {
  const s2 = s / 2,
    mLimit = Math.ceil(Math.sqrt(s2)) - 1;
  for (let m = 2; m <= mLimit; m++) {
    if (s2 % m === 0) {
      let sm = s2 / m;
      while (sm % 2 === 0) {
        sm /= 2;
      }
      let k = (m % 2 === 1) ? m + 2 : m + 1;
      while (k < 2 * m && k <= sm) {
        if (sm % k === 0 && gcd(k, m) === 1) {
          const d = s2 / (k * m),
            n = k - m;
          const a = d * (m * m - n * n),
            b = 2 * d * m * n,
            c = d * (m * m + n * n);
          return (a * b * c);
        }
        k += 2;
      }
    }
  }
};

// Helper function for greatest common divisor, recursive.
// TODO: performance test this function separately.
// https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor
function gcd(a, b) {
  if (! b) {
    return a;
  }
  return gcd(a % b);
}

// Solution 2 Tests
console.log(parameterization(1000));


// 🚀 PERFORMANCE


// 🧠 WIL WHAT I LEARNED


// 📘 NOTES
