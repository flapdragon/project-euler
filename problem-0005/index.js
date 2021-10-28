// https://projecteuler.net/problem=5
// Smallest multiple
// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// answer: 232792560

// my first method, pretty much i try to solve everything with loops because i don't know the math.
// ifs start with the most exclusive if cases, and omits what would be duplicate ifs from 1 - 10
// increment (i) start at base number (20) times base number - 1 (19) i guess, because that will be the first option that will be divisible by the first two numbers
console.time("Array initialize");
var c = true,
    i = 20 * 19;
while (c === true) {
    // check for divisibility by starting with the most restrictive first - for performance
    if (i % 20 === 0) {
        if (i % 19 === 0) {
            if (i % 18 === 0) {
                if (i % 17 === 0) {
                    if (i % 16 === 0) {
                        if (i % 15 === 0) {
                            if (i % 14 === 0) {
                                if (i % 13 === 0) {
                                    if (i % 12 === 0) {
                                        if (i % 11 === 0) {
                                            // don't do numbers 10 and below as they will be covered by the numbers twice as big
                                            // that is, numbers divisible by 20 will be divisible by 10, etc.
                                            console.log(i);
                                            c = false; // stop loop
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    i++;
}
console.timeEnd("Array initialize");
// ~1026.120ms

// method no. 2, i was looking for alternatives to nested ifs. this is an ungodly slow method
// console.time("Array initialize");
// var c = true,
//     i = 20;
// while (c === true) {
//     if (i % 20 === 0 && i % 19 === 0 && i % 18 === 0 && i % 17 === 0 && i % 16 === 0 && i % 15 === 0 && i % 14 === 0 && i % 13 === 0 && i % 12 === 0 && i % 11 === 0) {
//         console.log(i);
//         c = false; // stop loop
//     }
// }
// console.timeEnd("Array initialize");
// this is slow as shit, i proved it

// method based on project euler guide. using prime factorization and logarithms. i'm not sure his method (below) checks for prime.
// significantly faster than method no. 1. also can take in a number and work dynamically.
console.time("Array initialize");
var k = 20,
    n = 1,
    a = 0,
    iToTheA;
var check = true,
    limit = Math.sqrt(k);
for (var i = 1; i <= k; i++) {
    a = 1;
    if (check) {
        if (i <= limit) {
            a = Math.floor(Math.log(k) / Math.log(i));
        }
        else {
            check = false;
        }
    }
    iToTheA = Math.pow(i, a);
    // added Nan check because javascript also added is prime check because that seems to be important
    if (!isNaN(iToTheA) && isPrime(i)) {
        n = n * iToTheA;
    }
}

console.log(n);
console.timeEnd("Array initialize");

// solution from guide
// while p[i] <= k
//     a[i] = 1
// if check then
// if p[i] <= limit then
// a[i] = floor( log(k) / log(p[i]) )
// else
// check = false
// end if end if
//     N = N * p[i] ^ a[i]
//     i=i+1 end while
//     output N

// just trying out the math in my head
var test3 = 2 * 2 * 2 * 2;
test3 = test3 * 3 * 3;
test3 = test3 * 5;
test3 = test3 * 7;
test3 = test3 * 11;
test3 = test3 * 13;
test3 = test3 * 17;
test3 = test3 * 19;
console.log(test3);

// from http://www.javascripter.net/faq/numberisprime.htm
function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
    if (n==leastFactor(n)) return true;
    return false;
}

// http://www.javascripter.net/faq/numberisprime.htm
// leastFactor(n)
// returns the smallest prime that divides n
//     NaN if n is NaN or Infinity
//      0  if n=0
//      1  if n=1, n=-1, or n is not an integer
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

// from https://www.thepolyglotdeveloper.com/2015/04/determine-if-a-number-is-prime-using-javascript/
// it returns true for 4 - exterminate! i should probably comment on his site but ... then i'd have to sign up ...
function isPrimeReturnsTrueFor4(value) {
    var half = Math.round(value / 2);
    for (var i = 2; i < half; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}