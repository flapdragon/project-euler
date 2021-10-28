// https://projecteuler.net/problem=4
// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// I am splitting out the helper functions here because I went on a little side quest here to find the best is michael palindrome function
// Helper function 1 for palindrome comparison
// This is slower. It uses array stuff so yeah.
function isPalindrome(n) {
  // Comparing this as a number, so it will ignore leading 0s. That doesn't matter in this case.
  const reversed = parseFloat(n.toString().split('').reverse().join(''));
  return n === reversed;
}

// Helper function 2
// I eventually was able to create a reverser function more like what You-ler had and it was crazy fast.
// https://jsben.ch/KvtkN
// Just comparing these 2 and running solution 4 the same in both it was about 220,000 to 13,000.
// It uses only math and loops.
function isPalindrome2(n) {
  let original = n,
    digit,
    reversed = 0;
  while (n) {
    digit = n % 10;
    reversed = (reversed * 10) + digit;
    n = n / 10 | 0;
  }
  return original === reversed;
}

// Solution 1
// This solution seems to be iterating over all 3 digits numbers and then nested inside that iterating again to get all the possible
// a * b values.
// Then it checks to see if that product is a palindrome and if it's higher than the last palindrome.
// I'm not sure what the original reverse function was supposed to do, besides reversing the number obviously but it didn't do that once
// converted to JavaScript, so I replaced it with a JavaScript one.

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

// Solution 2 Tests
console.log(findLargestPalindrome2());

// Solution 3
// Next we should count down from the top 999 because the largest palindrom is likely to be closer to the top.
// Also once we find the number we can break the loop there and not even have to iterate through all the possible combinations.
// I am pretty proud to say that this optimization had occured to me in my original solution.
// No changes to isPalindrome helper function
function findLargestPalindrome3() {
  let largestPalindrome = 0,
    a = 999;
  while (a >= 100) {
    let b = 999;
    while (b >= a) {
      if (a * b <= largestPalindrome) {
        break; // Since a * b is always going to be less than the current largest one.
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

// Solution 4
// Up until now the solutions made complete sense to me and I followed along and felt smort.
// This one. No. This is math. So I understand it. But it would have never occured to me. I am hoping it will in the future.
// Not all 3 digit numbers yield the highest/longest 6 digit palindrome. 100 * 100 is 10,000, for example.
// So by factoring out a 6 digit palindrome it becomes clear that 11 must be a factor of either a or b.
// So then instead of iterating over odds by 2 (3, 5, 7, etc.) we can iterate over odds by 11 in some cases.
// Again, iterating from the top down in reverse, starting at 999.
function findLargestPalindrome4() {
  let largestPalindrome = 0,
    a = 999;
  while (a >= 100) {
    let b, db;
    if (a % 11 === 0) {
      b = 999;
      db = 1;
    }
    else {
      b = 990; // Starting at 990 because it is the largest number divisible by 11 and less than or equal to 999.
      db = 11;
    }
    while (b >= a) {
      if (a * b <= largestPalindrome) {
        break;
      }
      if (isPalindrome2(a*b)) {
        largestPalindrome = a * b;
      }
      b = b - db;
    }
    a--;
  }
  return largestPalindrome;
}

// Solution 4 Tests
console.log(findLargestPalindrome4());

// Original solution
// Doesn't crash the browser and it works. I bothered to make it actually return the answer but I didn't put it in a function.
// Lots of console.logs. I feel like I was pretty casual back then about my personal code. I didn't seem to give much thought to format
// or whether anyone would ever look at it.
// I did do the optimization of going backwards from the top, something that in general in JavaScript is a performance technique but
// in this case makes sense since we are looking for a higher number.
// Nevermind that I didn't put a break in the loop to fully optimize it.
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
// https://jsben.ch/gcA1F
// The final solution 4 does indeed outperform the previous best solution 3 - consistently about 13000 to about 2000.
// I imagine the isPalindrome function could be sped up as well, but we are comparing the find function only, not the tester.

// WIL What I Learned
// I never used to look at a number as a product of factors. I would look at it more like a string - what is the pattern,
// even, odd, number of digits, basically face value. Now I see it can be looked at by its factors and properties can be
// extracted from those factors and patterns.
// First time around, 5 years ago, 5 years can you believe it, I was more content to just be blown away by the math. Now I'm
// looking deeper into the math and actually understanding it and coding from that point of view. Definitely still new to this and
// definitely still borrowing Euler's point of view, but I am taking steps.

// Notes
// Find largest palindrome comparison, 4 vs 3 (with slow helper)
//   https://jsben.ch/gcA1F
// Helper comparison, 2 vs 1, 2 is crazy faster
//   https://jsben.ch/KvtkN
// Helper 2 is based on Euler's but also this stack overflow
//   https://stackoverflow.com/questions/38053729/javascript-how-to-reverse-a-number/38053861
// Helper 1 was based on something I'd seen before for strings and this site
//   https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
