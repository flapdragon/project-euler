// https://projecteuler.net/problem=9
// Special Pythagorean triplet
// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


// method
// i can't imagine doing this without just looping all over the place
// get only squares first, no need to iterate over primes and ... sucky numbers
// ... starting to feel good about this
// start 2

/********* performance of i * i vs math.pow BEGIN *********/
// tangent (bad choice of words) testing num * num vs. math.pow
// console.time("math.pow");
// var squares = [];
// for (var i = 0; i < 1000; i++) {
//     squares[i] = Math.pow(i, 2);
// }
// console.timeEnd("math.pow");
//
// console.time("eye times eye");
// var squares = [];
// for (var i = 0; i < 1000; i++) {
//     squares[i] = i * i;
// }
// console.timeEnd("eye times eye");

// results
// math.pow: 0.100ms <=> eye times eye: 0.052ms
// math.pow: 0.106ms <=> eye times eye: 0.036ms
// math.pow: 0.140ms <=> eye times eye: 0.057ms
// math.pow: 0.130ms <=> eye times eye: 0.044ms
// math.pow: 0.098ms <=> eye times eye: 0.037ms

// i * i the winner! not that console.time is the most conclusive but still ...
/********* performance of i * i vs math.pow END *********/


console.time("pythag");
// get squares
var squares = [],
    square = 0,
    i = 0,
    root;

while (square < 1000000) {
    root = i + 2;
    // square = (i+2) * (i+2);
    square = root * root;
    squares[i] = square;
    i++;
}
// iterate over squares
var len = squares.length,
    squareFilter,
    iSqrt,
    jSqrt,
    kSqrt,
    l = 0,
    kSquared;
for (var i = 0; i < len; i++) {
    for (var j = i; j < len; j++) {
        // for (var k = 0; k < len; k++) {
        //     // console.log(i, j, k);
        //     if (squares[i] + squares[j] === squares[k]) {
        //         iSqrt = Math.sqrt(squares[i]);
        //         jSqrt = Math.sqrt(squares[j]);
        //         kSqrt = Math.sqrt(squares[k]);
        //         console.log("1", i, squares[i], j, squares[j], k, squares[k]);
        //         console.log("2.1", iSqrt + jSqrt + kSqrt);
        //         console.log("2.2", squares[i] + squares[j] + squares[k]);
        //         console.log("3", iSqrt * jSqrt * kSqrt);
        //     }
        // }

        // squareFilter = squares.find(squares[i] + squares[j]);
        squareIndexOf = squares.indexOf(squares[i] + squares[j]);
        if (squareIndexOf > -1) {
            l++;
            kSquared = squares[squareIndexOf];
            iSqrt = Math.sqrt(squares[i]); // a
            jSqrt = Math.sqrt(squares[j]); // b
            kSqrt = Math.sqrt(squares[squareIndexOf]); // c
            if (iSqrt + jSqrt + kSqrt === 1000) {
                console.log("1", squareIndexOf, l);
                console.log("2", squares[squareIndexOf]);
                console.log("3", i, squares[i], j, squares[j]);
                console.log("4.1", iSqrt + jSqrt + kSqrt);
                console.log("4.2", squares[i] + squares[j] + squares[squareIndexOf]);
                console.log("4.3", iSqrt, jSqrt, kSqrt);
                console.log("4.4", iSqrt * jSqrt * kSqrt);
            }
        }
    }
}
// app.js:108 1 423 428
// app.js:109 2 180625
// app.js:110 3 198 40000 373 140625
// app.js:111 4.1 1000
// app.js:112 4.2 361250
// app.js:113 4.3 200 375 425
// app.js:114 4.4 ???

console.timeEnd("pythag");
// pythag: 13.086ms
// pythag: 12.509ms
// pythag: 5.852ms
// pythag: 12.390ms
// pythag: 516.580ms

console.log(squares);
// app.js:109 [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024]


/********* performance of for loop vs map BEGIN *********/
// tangent 2
// console.time("map");
// squares.map( function(item) {
//      console.log(item);
// });
// console.timeEnd("map");
//
// console.time("for");
// for (var i = 0, len = squares.length; i < len; i++) {
//      console.log(squares[i]);
// }
// console.timeEnd("for");

// map: 4.165ms
// for: 3.705ms
// map: 5.203ms
// for: 3.867ms
// map: 4.162ms
// for: 2.696ms
// map: 3.455ms
// for: 2.697ms
// map: 3.436ms
// for: 4.102ms
// map: 4.386ms
// for: 2.978ms
/********* performance of for loop vs map END *********/
