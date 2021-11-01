// https://projecteuler.net/problem=5
// Smallest multiple
// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// My original answer here was large and thorough enough that I broke it out into its own file, original.js
// I can see that I started taking this seriously on problem 5. I had much better comments. I had performance testing.
// I had notes and included thoughts on my journey to understanding the issue.
// Looking at the code I can see I clearly went deeper than normal. When I did go deeper before I often didn't track
// the code or learning. My original solution for this problem marks the beginning of my current approach.

// I am including my original first pass that was based on Euler's solution here
// I can see I had the right spirit but was definitely confused. Although this answer was faster than my other ones
// and I tweaked the hell out of the prime function I didn't actually do what Euler did.
// Original
// method based on project euler guide. using prime factorization and logarithms. i'm not sure his method (below) checks for prime.
// significantly faster than method no. 1. also can take in a number and work dynamically.
// console.time("Array initialize");
// var k = 20,
//     n = 1,
//     a = 0,
//     iToTheA;
// var check = true,
//     limit = Math.sqrt(k);
// for (var i = 1; i <= k; i++) {
//     a = 1;
//     if (check) {
//         if (i <= limit) {
//             a = Math.floor(Math.log(k) / Math.log(i));
//         }
//         else {
//             check = false;
//         }
//     }
//     iToTheA = Math.pow(i, a);
//     // added Nan check because javascript also added is prime check because that seems to be important
//     if (!isNaN(iToTheA) && isPrime(i)) {
//         n = n * iToTheA;
//     }
// }
//
// console.log(n);
// console.timeEnd("Array initialize");

// Solution
// 100% based on Euler's solution
// I am abstracting out the k primes logic and passing in p to mirror Euler's solution as closely as possible.
const smallestMultiple = (k, p) => {
  let N = 1,
    i = 0,
    check = true,
    limit = Math.sqrt(k);
  while (p[i] <= k) {
    let a = 1;
    if (check) {
      if (p[i] <= limit) {
        a = Math.floor( Math.log(k) / Math.log(p[i]) );
      }
      else {
        check = false;
      }
    }
    N *= Math.pow(p[i], a);
    i++;
  }
  return N;
};
// Helper function to find primes less than or equal to k
function getPrimes(k) {
  let sieve = [],
    i,
    j,
    primes = [];
  for (let i = 2; i <= k; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = i << 1; j <= k; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

// Tests
console.log(smallestMultiple(20, getPrimes(20)));

// Performance
// The version of smallestMultiple with the hard coded list of primes <= k was obviously the fastest, about 20% to
// 30% faster than my original solution. The one that includes the prime finder getPrimes is clearly slower, but
// it does make the solution an actual solution and it is still faster than the original by about 5% to 10%.
// I thought it would be much faster because of the 2 helper functions.
// As I increased k, the new solution, even with the prime finder helper function really began to be faster,
// increasing to almost double the speed at k = 200.
// https://jsben.ch/toQRq

// WIL What I Learned
// I am taking the time to understand the math all the way and that is making the code much easier.
// I have yet to hit that point where I am implementing my math learnings on my own in the first pass solution but
// I look forward to the day. 👀

// Notes
// Got primes solution from stack overflow. Lots of very smart answers here that don't return the right answer.
// Simply modernized the top answer.
//   https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
