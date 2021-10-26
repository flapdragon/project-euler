// https://projecteuler.net/problem=3
// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// From Project euler overview, "crude" solution.
// 🥉 Third place
function largestPrimeCrude(n) {
  let factor = 2,
    lastFactor = 1;
  // Keep looping while you have an n value above 1
  while (n > 1) {
    // If current factor is actually a factor of n
    if (n % factor === 0) {
      // Save it
      lastFactor = factor;
      // Set n to be itself divided by current factor. You know, factor it out.
      n = n / factor;
      // Keep factoring it out until you can't anymore.
      while (n % factor === 0) {
        n = n / factor;
      }
    }
    // Increment
    factor++;
  }
  return lastFactor;
}

console.log(largestPrimeCrude(13195));
console.log(largestPrimeCrude(600851475143));

// Original solution - brute force, so hot right now
// Looks like I was cutting the given number in half, because obviously the largest prime would need to be half or less of the original.
// Then I was looping from 2 to half, checking if each was a prime.
// It does return the answer but it also does lock the browser a little bit. So it shall be commented out going forward.
// I correctly only considered factors (n % i === 0), but while considering those matches I did a simple check for prime, isPrime,
// which started from 2 again, looping all over again. Almost a factorial.
// 🏅 Brute force gets an honorable mention because it was at least part of the way to the right idea.
// var n = 600851475143,
//     a = Math.round(n/2);
// for (var i=2; i < a; i++) {
//     if (n % i === 0) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }
//
// function isPrime(value) {
//     var half = Math.round(value / 2);
//     for (var i = 2; i < half; i++) {
//         if (value % i === 0) {
//             return false;
//         }
//     }
//     return value > 1;
// }
