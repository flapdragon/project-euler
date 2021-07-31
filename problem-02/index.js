// https://projecteuler.net/problem=2
// Even Fibonacci numbers
// Problem 2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//     1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// My original solution from my first pass years ago. Iteration, brute force. Knock knock, Fib!
// Originally I used an array, probably now I would only keep track of the last 2 values as separate int variables to save space and array processing.
// I'm going to give my good old brute force method 3rd place as it was included in Euler's own solutions. Good old Brute Force. Nothing beats Brute Force.
// 🥉 Third place
function bruteForce() {
  var s = 2,
    i = 2,
    f = 0,
    arr = [1,2],
    x = true;
  while (f < 4000000) {
    f = arr[i-1] + arr[i-2];
    arr.push(f);
    if (f % 2 === 0) {
      s += f;
    }
    i++;
  }
  return s;
}

// Ok so apparently every 3rd Fibonacci number is even because the preceding 2 are odd and 2 odds added together are even 🤯🤯
// This solution is based on this information and Project Euler's second solution. Still iterating.
// 🥈 Second place
function onlyEvenFans() {
  const limit = 4000000;
  let sum = 0,
    a = 1
    b = 1
    c = a + b;
  while (c < limit) {
    sum = sum + c;
    a = b + c;
    b = c + a;
    c = a + b;
  }
  return sum;
}

// The best solution is to avoid testing for even numbers in the Fibonacci sequence and use math to find where the evens are hiding.
// In fact using Euler's theorem, you can loop over just the even numbers. I don't know of a way to do this without iterating.
// For once I have created the best solution myself but only by using the formula from Euler.
// This one performs best and scales better than the other solutions the higher you go.
// 🥇 1st place
function evenFibonaccis() { // have feelings
  const limit = 4000000;
  let sum = 10, // Adding the first two even numbers
    a = 2,
    b = 8;
  let c = 4 * b + a;
  while (c < limit) {
    sum += c;
    a = b;
    b = c;
    c = 4 * b + a;
  }
  return sum;
}

// Tests
console.log(bruteForce());
console.log(onlyEvenFans());
console.log(evenFibonaccis());

// What I learned
// Every 3rd Fibonacci number is even because the preceding 2 numbers are odd and 2 odds added together are even. I mean it has to be this way.
// Starting at 1, not 0. So, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
// 1. odd + even = odd, 2. even + odd = odd, 3. odd + odd = even. 🤯 How did I never notice that?
// I also learned the formula for getting at this pattern of even only Fibonacci numbers: F(n) = 4*F(n-3) + F(n-6), which itself is based on Fibonacci, E(n) = E(n-1) + E(n-2).

// Notes
// There were no notes.
