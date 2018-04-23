// https://projecteuler.net/problem=4
// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

console.log("problem4");

var arr = [];

for (var i=999; i > 99; i--) {
    // var pal = isPalindrome(i * i);
    // start at i, no need to duplicate effort
    for (var j=i; j > 99; j--) {
        if (isPalindrome(i * j)) {
            arr.push(i * j);
            console.log(i, j, i * j, "palindrome");
        }
    }
}

function isPalindrome(val) {
    var str = val.toString();
    if (str.length === 6) {
        // console.log(str, str.length, str.substring(0, 3), str.substring(6, 3), reverse(str.substring(6, 3)));
        if (str.substring(0, 3) === reverse(str.substring(3, 6))) {
            return true;
        }
    }
    // else {
    //     // console.log(str, str.length, str.substring(0, 2), str.substring(3, 5), reverse(str.substring(3, 5)));
    //     // if (str.substring(0, 2) === reverse(str.substring(3, 5))) {
    //     //     return true;
    //     // }
    //     // just return false or don't execute because it will be smaller than a 6 digit number
    // }
    return false;
}

function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}

arr.sort();

console.log(arr);
console.log(arr[arr.length-1]);

// 993 913 906609 "palindrome"