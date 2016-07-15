// https://projecteuler.net/problem=1
// Multiples of 3 and 5
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

console.log("problem1");

// start at 3
// add matches to array (optional)
// sum at end
var s = 0;
for (var i=3; i < 1000; i++) {
    // console.log(i, i % 3);
    // console.log(i, i % 5);
    console.log(i, i % 3 === 0 || i % 5 ===0);
    if (i % 3 === 0 || i % 5 ===0) {
        s += i;
    }
}
console.log(s);
// 233168
