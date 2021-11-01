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
const smallestMultiple = (k) => {
  // Hard coding list of primes for now.
  const p = [ 2, 3, 5, 7, 11, 13, 17, 19 ];
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
}

// Tests
console.log(smallestMultiple(20));
