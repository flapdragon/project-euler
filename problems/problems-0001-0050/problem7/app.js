// https://projecteuler.net/problem=7
// 10001st prime
// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

// 104743

// my method 1
console.time("10001st prime method 1");
var i = 0,
    primeCount = 0;
// for (var i = 0; i < 10001; i++) {
while (primeCount < 10001) {
    if (isPrime(i)) {
        primeCount++;
        if (primeCount === 10001) {
            console.log(i);
        }
    }
    i++;
}
console.timeEnd("10001st prime method 1");
// 10001st prime method 1: 9.868ms

// my method 2, based on overview solution
// solution based on overview is about twice as fast because it is doing about half the work, skipping the evens
console.time("10001st prime method 2");
var i = 1,
    primeCount = 1;
while (primeCount < 10001) {
    if (isPrime(i)) {
        primeCount++;
        if (primeCount === 10001) {
            console.log(i);
        }
    }
    i += 2;
}
console.timeEnd("10001st prime method 2");
// 10001st prime method 2: 4.438ms

// problem 7 overview
// limit=10001
// count=1 //we know that 2 is prime
// candidate=1
// repeat
// candidate=candidate+2
// if isPrime(candidate) then count=count+1
// until count=limit
// output candidate



// from http://www.javascripter.net/faq/numberisprime.htm
function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
    if (n==leastFactor(n)) return true;
    return false;
}

// from http://www.javascripter.net/faq/numberisprime.htm
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