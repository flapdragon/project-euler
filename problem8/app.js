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

// post - https://projecteuler.net/thread=8&page=9#248783

// methods
// will finding the greatest sum return the same digits that return the greatest product?
// slice()
// substring()
// substr()

// reference
// slice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// substring - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// substr - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// string
var num1000 = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
console.log(num1000);

// 4 digits
console.time("greatest product 4 method 1");
function findGreatestProductV1(dig) {
  var len = num1000.length-(dig-1),
    sliced,
    productCurrent = 1,
    productGreatest = 1;
  for (var i = 0; i < len; i++) {
    productCurrent = 1;
    sliced = num1000.slice(i, i+dig);
    // productCurrent = sliced[0] * sliced[1] * sliced[2] * sliced[3];
    for (var j =0; j < dig; j++) {
      productCurrent *= sliced[j];
    }
    if (productCurrent > productGreatest) productGreatest = productCurrent;
    // console.log(sliced, productCurrent, productGreatest);
  }
  console.log(productGreatest);
}
findGreatestProductV1(4);
console.timeEnd("greatest product 4 method 1");
// greatest product 4 method 1: 0.528ms

// 13 digits
console.time("greatest product 13 method 1");
function findGreatestProduct13V1(dig) {
  var len = num1000.length-(dig-1),
    sliced,
    productCurrent = 1,
    productGreatest = 1;
  for (var i = 0; i < len; i++) {
    productCurrent = 1;
    sliced = num1000.slice(i, i+dig);
    // productCurrent = sliced[0] * sliced[1] * sliced[2] * sliced[3];
    for (var j =0; j < dig; j++) {
      productCurrent *= sliced[j];
    }
    if (productCurrent > productGreatest) productGreatest = productCurrent;
    // console.log(sliced, productCurrent, productGreatest);
  }
  console.log(productGreatest);
}
findGreatestProduct13V1(13);
console.timeEnd("greatest product 13 method 1");
// greatest product 13 method 1: 0.640ms
// test 2: 0.890ms, 1.066ms, 0.881ms, 0.895ms, 0.884ms, 0.919ms, 0.890ms, 1.047ms, 1.202ms, 1.137ms


// 13 digits
console.time("greatest product 13 method 2");
function findGreatestProduct13V2(dig) {
  var len = num1000.length-(dig-1),
    subStringed,
    productCurrent = 1,
    productGreatest = 1;
  for (var i = 0; i < len; i++) {
    productCurrent = 1;
    subStringed = num1000.substring(i, i+dig);
    // productCurrent = sliced[0] * sliced[1] * sliced[2] * sliced[3];
    for (var j =0; j < dig; j++) {
      productCurrent *= subStringed[j];
    }
    if (productCurrent > productGreatest) productGreatest = productCurrent;
    // console.log(sliced, productCurrent, productGreatest);
  }
  console.log(productGreatest);
}
findGreatestProduct13V2(13);
console.timeEnd("greatest product 13 method 2");
// greatest product 13 method 2: 0.840ms
// test 2: 0.988ms, 0.873ms, 0.906ms, 0.889ms, 0.928ms, 0.895ms, 1.431ms, 0.886ms, 0.885ms, 0.888ms

// 13 digits
console.time("greatest product 13 method 3");
function findGreatestProduct13V3(dig) {
  var len = num1000.length-(dig-1),
    subStred,
    productCurrent = 1,
    productGreatest = 1;
  for (var i = 0; i < len; i++) {
    productCurrent = 1;
    subStred = num1000.substr(i, dig);
    // productCurrent = sliced[0] * sliced[1] * sliced[2] * sliced[3];
    for (var j =0; j < dig; j++) {
      productCurrent *= subStred[j];
    }
    if (productCurrent > productGreatest) productGreatest = productCurrent;
    // console.log(sliced, productCurrent, productGreatest);
  }
  console.log(productGreatest);
}
findGreatestProduct13V3(13);
console.timeEnd("greatest product 13 method 3");
// greatest product 13 method 3: 0.965ms

// there is no overview for this one. i am lost ... rudderless ...

// 13 digits - use sum for comparison - fastest method
console.time("greatest product 13 method 4");
function findGreatestProduct13V4(dig) {
  var len = num1000.length-(dig-1),
    sliced,
    sumCurrent = 0,
    sumGreatest = 0,
    productGreatest = 1;
  for (var i = 0; i < len; i++) {
    productCurrent = 1;
    sliced = num1000.slice(i, i+dig);
    // productCurrent = sliced[0] * sliced[1] * sliced[2] * sliced[3];
    for (var j =0; j < dig; j++) {
      productCurrent += sliced[j];
    }
    if (productCurrent > productGreatest) {
      for (var j =0; j < dig; j++) {
        productGreatest *= sliced[j];
      }
    }
    // console.log(sliced, productCurrent, productGreatest);
  }
  console.log(productGreatest);
}
findGreatestProduct13V1(13);
console.timeEnd("greatest product 13 method 4");
// greatest product 13 method 4: 0.582ms
