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

// Tests
console.log(largestPrimeCrude(13195));
console.log(largestPrimeCrude(600851475143));

// From overview, first improvement
// This involves treating 2 separately since it's the only even prime and then continuing at 3 and incrementing by 2
// 🥈 Second place
function largestPrimeSecond(n) {
  let lastFactor = 1;
  // Evens - Deal with 2 separately because this will cover all even numbers.
  if (n % 2 === 0) {
    n = n / 2;
    lastFactor = 2;
    while (n % 2 === 0) {
      n = n / 2;
    }
  }
  else {
    lastFactor = 1;
  }
  // Odds - Continue at 3, incrementing by 2, so 3, 5, 7, etc. so that we're now only dealing with the odd numbers.
  let factor = 3;
  while (n > 1) {
    if (n % factor === 0) {
      n = n / factor;
      lastFactor = factor;
      while (n % factor === 0) {
        n = n / factor;
      }
    }
    // Increment by 2
    factor += 2;
  }
  return lastFactor;
}

// Tests
console.log(largestPrimeSecond(13195));
console.log(largestPrimeSecond(600851475143));

// From overview, final, best solution
// Every number n can at most have one prime factor greater than the square root of n
// If factor exceeds this square root we know the remaining number is prime
// 🥇 First place
function largestPrime(n) {
  let lastFactor = 1;
  // Evens - Deal with 2 separately because this will cover all even numbers.
  if (n % 2 === 0) {
    lastFactor = 2;
    n = n / 2;
    while (n % 2 === 0) {
      n = n / 2;
    }
  }
  else {
    lastFactor = 1;
  }
  // Odds - Continue at 3, incrementing by 2, so 3, 5, 7, etc. so that we're now only dealing with the odd numbers.
  let factor = 3;
  let maxFactor = Math.sqrt(n);
  while (n > 1 && factor <= maxFactor) {
    if (n % factor === 0) {
      n = n / factor;
      lastFactor = factor;
      while (n % factor === 0) {
        n = n / factor;
      }
      maxFactor = Math.sqrt(n);
    }
    factor += 2;
  }
  // Using a ternary here since we're not in a loop and it's much more readable.
  return (n === 1) ? lastFactor : n;
}

// Tests
console.log(largestPrime(13195));
console.log(largestPrime(600851475143));

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

// What I learned
// I learned that rather than just checking for a factor and then primacy, you can also apply the factorials to manipulate the original
// number itself, making the speed orders of magnitude faster.
// I learned that a prime number over 2 has to be odd, even though I already knew this I never really used it in practice. In practice,
// in this situation, it means to only loop through odd numbers, only checking odds for potential factors, saving even more time.
// I learned that every number can at most have one prime factor greater than the square root of itself.
// I have to say, while I understand the math now, and obviously the code, and the concept, none of these things would ever have
// occurred to me.

// Notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
// https://bulma.io/
