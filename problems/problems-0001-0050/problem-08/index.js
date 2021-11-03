// 🧙 PROBLEM
// https://projecteuler.net/problem=8
// Largest product in a series
// Problem 8
// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
// 73167176531330624919225119674426574742355349194934
// 96983520312774506326239578318016984801869478851843
// 85861560789112949495459501737958331952853208805511
// 12540698747158523863050715693290963295227443043557
// 66896648950445244523161731856403098711121722383113
// 62229893423380308135336276614282806444486645238749
// 30358907296290491560440772390713810515859307960866
// 70172427121883998797908792274921901699720888093776
// 65727333001053367881220235421809751254540594752243
// 52584907711670556013604839586446706324415722155397
// 53697817977846174064955149290862569321978468622482
// 83972241375657056057490261407972968652414535100474
// 82166370484403199890008895243450658541227588666881
// 16427171479924442928230863465674813919123162824586
// 17866458359124566529476545682848912883142607690042
// 24219022671055626321111109370544217506941658960408
// 07198403850962455444362981230987879927244284909188
// 84580156166097919133875499200524063689912560717606
// 05886116467109405077541002256983155200055935729725
// 71636269561882670428252483600823257530420752963450
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

// Set 1000 digit number as string
const n = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

// SOLUTION 1
// The brute force solution had already occured to me in my original - iterate through blindly.
// This time 'round, it immediately occured to me that you can handle zeros differently, essentially identifying them,
// resetting the index to skip them because all products involving them will be zero, and skipping the current inner loop
// execution and continuing the outer loop.
// Also I ran tests regarding my sum is faster theory, that doing addition would be faster and should also indicate the
// highest product. That was just wrong. Addition is definitely faster but doesn't indicate whether the product would be
// higher or not.
// On the JavaScript side, String.prototype.substring() is quite a bit faster than String.prototype.slice() in this case.
// 1 edge case might be that there is a zero in every group of adjacent 13 digits. In that case setting the productLargest
// handles that case and the normal case for the given number.
// Skipping ones theory
// In this case with the given string, you could also check for 1s, because they don't increase the product at all.
// However, the issue isn't as simple as with zero. If there is a 1 in every group of 13 then you will never calculate
// the answer. So then it becomes an issue of counting ones and comparing the total in each group of 13 and likely
// that is as much work as just finding the product in the first place.
// In this case though, with this given number, it is faster to treat ones like zeros and skip them, by about twice as much.
// The solution below works for any long number, but if you were looking to tweak as much as possible with only the
// original number from Project Euler in mind, then simply change (sliced[j] == 0) to (sliced[j] == 0 || sliced[j] == 1).
const findGreatestProduct = (adjacent, n) => {
  let len = n.length - (adjacent - 1),
    sliced,
    product = 1,
    productLargest = 0; // Needs to be 0
  loop1:
  for (let i = 0; i < len; i++) {
    sliced = n.substring(i, i + adjacent);
    product = 1;
    loop2:
    for (let j = 0; j < adjacent; j++) {
      // If the current number is a zero
      if (sliced[j] == 0) {
        // Reset i to start after the zero
        i += j + 1;
        // Continue on with outer loop
        continue loop1;
      }
      product *= sliced[j];
    }
    if (product > productLargest) {
      productLargest = product;
    }
  }
  return productLargest;
}

// Solution 1 Tests
console.log(findGreatestProduct(13, n));


// 🚀 PERFORMANCE
// Any time your code can avoid performing unnecessary work you want it to. So my handling of the zeros was the only
// conceptual performance tweak I had, outside of purely language concerns with JavaScript.
// It always outperformed the other solutions by at least 20%, sometimes a lot more, both using console.time/timeEnd and jsben.ch.


// 🧠 WIL WHAT I LEARNED
// I had heard of and used generic JavaScript labels, for any block of code, but I had never used it for a loop before. Very handy.
// I'm definitely better at this than I was 5 years ago.


// 📘 NOTES
// Loop labels
//   https://stackoverflow.com/questions/183161/whats-the-best-way-to-break-from-nested-loops-in-javascript
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
