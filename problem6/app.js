// https://projecteuler.net/problem=6
// Sum square difference
// Problem 6
// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 55 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// 25164150

var limit = 100;

// loop method
function getSumOfSquares(val) {
    var sum = 0;
    for (var i=0; i <= limit; i++) {
        sum += i*i;
    }
    return sum;
}

// loop method
function getSquareOfSums(val) {
    var sum = 0;
    for (var i=0; i <= limit; i++) {
        sum += i;
    }
    return sum * sum;
}

// do both at once with one loop
function getDifference(val) {
    var sum = 0,
        sumSq = 0;
    for (var i=0; i <= limit; i++) {
        sum += i*i;
        sumSq += i;
    }
    // console.log(sum, sumSq, sumSq*sumSq, sumSq*sumSq - sum);
    return (sumSq * sumSq) - sum;
}

// sum of integers function (borrowed from site)
function sumIntegers(val) {
    // sum(n) = n(n + 1)=2;
    return val * (val + 1) / 2;
}

// square of sum function (borrowed from site)
function squareSum(val) {
    // sum sq = (2limit + 1)(limit + 1)limit=6
    return (2 * val + 1) * (val + 1) * val / 6;
}

// var sumOfSquares = getSumOfSquares(limit);
// var squareOfSums = getSquareOfSums(limit);
// console.log(sumOfSquares, squareOfSums, squareOfSums - sumOfSquares);

console.log(getDifference(limit));

console.log(sumIntegers(100));
console.log(squareSum(100));

