// https://projecteuler.net/problem=9
// Special Pythagorean triplet
// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// accidentally realized that only 3,4,5 and multiples of that ratio work for a Pythagorean triplet.
// so loop only over those.
// no ... no that's not true

// references

console.time("pythagorean sum method 1");
var a1 = 3,
  b1 = 4,
  c1 = 5,
  sum = 0,
  i = 1,
  a2,
  b2,
  c2;
while (sum <=1000) {
  a2 = a1*i,
  b2 = b1*i,
  c2 = c1*i;
  sum = a2 + b2 + c2;
  console.log(i, a2, b2, c2, sum);
  i++;
}
console.log(a2, b2, c2);
console.timeEnd("pythagorean sum method 1");


// test for square only. for this case there is no need to check for > 0.
// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
// };
// 63504
// 112896
// 176400

// 83 249 332 415 996
// 62001
// 110224
// 172225

// 250 333 417
// 62500
// 110889
// 173889
