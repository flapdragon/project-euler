// 🧙 PROBLEM
// https://projecteuler.net/problem=7
// 10001st prime
// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10,001st prime number?


// SOLUTION 1
// 🥇 First place
// JavaScript version of Project Euler's solution.
// Had to use while loop instead of repeat...until.
// This solution scales very well.
function findNthPrimePE(limit) {
  let count = 1,
    candidate = 1;
  while (count < limit) {
    candidate += 2;
    if (isPrime(candidate)) {
      count++;
    }
  }
  return candidate;
}

// Helper function that determines if a given number is prime.
// Exact JavaScript copy of Project Euler's implementation.
function isPrime(n) {
  let r, f;
  // Is 1, not prime
  if (n === 1) {
    return false;
  }
  // 2 or 3, prime
  else if (n < 4) {
    return true;
  }
  // Is even, not prime
  else if (n % 2 === 0) {
    return false;
  }
  // 5 or 7, primacy
  else if (n < 9) {
    return true;
  }
  else if (n % 3 === 0) {
    return false;
  }
  else {
    r = Math.floor(Math.sqrt(n)); // Square root of n rounded to the greatest integer r so that r * r <= n
    f = 5;
    while (f <= r) {
      if (n % f === 0) {
        return false;
      }
      if (n % (f + 2) === 0) {
        return false;
      }
      f += 6; // Increment by 6
    }
    // All other elses
    return true;
  }
}

// Solution 1 Tests
console.log(findNthPrimePE(10001));


// SOLUTION 2
// 🥈 Second place
// My original solution, assembled from Project Euler's loop and JavaScripter.net's prime checker, is the fastest ...
// solution at 10001. When you test for the 20002nd prime, then Project Euler's is faster. So PE's scales better.
// But this solution did so well I'm including it here as well as in the original.js.
function findNthPrimeME(limit) {
  let i = 1,
    count = 1;
  while (count < 10001) {
    if (isPrime(i)) {
      count++;
      if (count === 10001) {
        return i;
      }
    }
    i += 2;
  }
}

// Is prime helper from JavaScripter: http://www.javascripter.net/faq/numberisprime.htm
function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
  if (n==leastFactor(n)) return true;
  return false;
}

// Is prime helper helper: http://www.javascripter.net/faq/numberisprime.htm
function leastFactor(n) {
  if (isNaN(n) || !isFinite(n)) return NaN;
  if (n==0) return 0;
  if (n%1 || n*n<2) return 1;
  if (n%2==0) return 2;
  if (n%3==0) return 3;
  if (n%5==0) return 5;
  var m = Math.sqrt(n);
  for (var i=7;i<=m;i+=30) {
    if (n%i==0)      return i;
    if (n%(i+4)==0)  return i+4;
    if (n%(i+6)==0)  return i+6;
    if (n%(i+10)==0) return i+10;
    if (n%(i+12)==0) return i+12;
    if (n%(i+16)==0) return i+16;
    if (n%(i+22)==0) return i+22;
    if (n%(i+24)==0) return i+24;
  }
  return n;
}

// Solution 2 Tests
console.log(findNthPrimeME(10001));


// 🚀 PERFORMANCE
// I don't know how I found it but the solution on javascripter.net proved to be a very fast is prime check, which
// is the bulk of the work being done for this problem, and which gives my original solution such great speed,
// especially at Ns less than 20000.
// At 10001, solution 2 wins every time. At 20002 and I'm assuming higher solution 1 wins every time.
// 20002 test
//   https://jsben.ch/p5PNU


// 🧠 WIL What I Learned
// I think for these first 10 problems that I've already done it's more about re-learning because I did these before
// but completely forgot everything. I remembered Gauss on the last one once I saw the formula. This time I don't
// remember anything.
// This time around, I did learn a better scalable way to find primes, Project Euler's, so I'll save that for future
// reference.
// Also I would say I'm solidifying the whole don't include evens in your prime search, which is becoming a little
// more obvious every time it comes up.
