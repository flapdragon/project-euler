// https://projecteuler.net/problem=3
// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

Math.sqrt(9);

var n = 600851475143,
    a = Math.round(n/2);

console.log(n, a);

for (var i=2; i < a; i++) {
    if (n % i === 0) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(value) {
    var half = Math.round(value / 2);
    for (var i = 2; i < half; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

// console.log(isPrime(n));

// list primes
// function printPrime(value) {
//     var primes = [];
//     for (var i = 2; i < Math.sqrt(Math.floor(value)); i++) {
//         primes[i] = true;
//     }
//     var limit = Math.sqrt(value);
//     for (var i = 2; i < limit; i++) {
//         if(primes[i] === true) {
//             for(var j = i * i; j < value; j += i) {
//                 primes[j] = false;
//             }
//         }
//     }
//     for (var i = 2; i < value; i++) {
//         if(primes[i] === true) {
//             console.log(i + " " + primes[i]);
//         }
//     }
// }
// printPrime(n);
