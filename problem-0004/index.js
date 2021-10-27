// https://projecteuler.net/problem=4
// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// Solution 1
// This solution seems to be iterating over all 3 digits numbers and then nested inside that iterating again to get all the possible
// a * b values.
// Then it checks to see if that product is a palindrome and if it's higher than the last palindrome.
// I'm not sure what the original reverse function was supposed to do, besides reversing the number obviously but it didn't do that once
// converted to JavaScript, so I replaced it with a JavaScript one.

// Solution 1 helper function for palindrome comparison
function isPalindrome(n) {
  // Comparing this as a number, so it will ignore leading 0s. That doesn't matter in this case.
  const reversed = parseFloat(n.toString().split('').reverse().join(''));
  return n === reversed;
}

// Actual solution 1
function findLargestPalindrome1() {
  let largestPalindrome = 0,
    a = 100,
    b = 100;
  while (a <= 999) {
    b = 100;
    while (b <= 999) {
      if (isPalindrome(a * b) && a * b > largestPalindrome) {
        largestPalindrome = a * b;
      }
      b++;
    }
    a++;
  }
  return largestPalindrome;
}

// Solution 1 Tests
console.log(findLargestPalindrome1());

// Solution 2
// We are covering the same options multiple times with approach 1. `b = a;` fixes that.
// No changes to isPalindrome helper function

// Actual solution 2
function findLargestPalindrome2() {
  let largestPalindrome = 0,
    a = 100,
    b = 100;
  while (a <= 999) {
    b = a; // Now b = a instead of 100, so we're not covering the same combinations twice
    while (b <= 999) {
      if (isPalindrome(a * b) && a * b > largestPalindrome) {
        largestPalindrome = a * b;
      }
      b++;
    }
    a++;
  }
  return largestPalindrome;
}

// Solution 3 Tests
console.log(findLargestPalindrome2());

// Solution 3
// Next we should count down from the top 999 because the largest palindrom is likely to be closer to the top.
// Also once we find the number we can break the loop there and not even have to iterate through all the possible combinations.
// I am pretty proud to say that this optimization had occured to me in my original solution.
// No changes to isPalindrome helper function

// Actual solution 3
function findLargestPalindrome3() {
  let largestPalindrome = 0,
    a = 999;
  while (a >= 100) {
    b = 999;
    while (b >= a) {
      if (a * b <= largestPalindrome) {
        break; // Since a * b is always going to be too small
      }
      if (isPalindrome(a * b)) {
        largestPalindrome = a * b;
      }
      b--;
    }
    a--;
  }
  return largestPalindrome;
}

// Solution 3 Tests
console.log(findLargestPalindrome3());

// Original solution
// Doesn't crash the browser and it works. I bothered to make it actually return the answer but I didn't put it in a function.
// I did do the optimization of going backwards from the top, something that in general in JavaScript is a performance technique but
// in this case makes sense since we are looking for a higher number.
// Lots of console.logs. I feel like I was pretty casual back then about my personal code. I didn't seem to give much thought to format
// or whether anyone would ever look at it.
// console.log("problem4");
//
// var arr = [];
//
// for (var i=999; i > 99; i--) {
//     // var pal = isPalindrome(i * i);
//     // start at i, no need to duplicate effort
//     for (var j=i; j > 99; j--) {
//         if (isPalindrome(i * j)) {
//             arr.push(i * j);
//             console.log(i, j, i * j, "palindrome");
//         }
//     }
// }
//
// function isPalindrome(val) {
//     var str = val.toString();
//     if (str.length === 6) {
//         // console.log(str, str.length, str.substring(0, 3), str.substring(6, 3), reverse(str.substring(6, 3)));
//         if (str.substring(0, 3) === reverse(str.substring(3, 6))) {
//             return true;
//         }
//     }
//     // else {
//     //     // console.log(str, str.length, str.substring(0, 2), str.substring(3, 5), reverse(str.substring(3, 5)));
//     //     // if (str.substring(0, 2) === reverse(str.substring(3, 5))) {
//     //     //     return true;
//     //     // }
//     //     // just return false or don't execute because it will be smaller than a 6 digit number
//     // }
//     return false;
// }
//
// function reverse(s) {
//     var o = '';
//     for (var i = s.length - 1; i >= 0; i--)
//         o += s[i];
//     return o;
// }
//
// arr.sort();
//
// console.log(arr);
// console.log(arr[arr.length-1]);

// Performance
// WIL What I Learned
// Notes
