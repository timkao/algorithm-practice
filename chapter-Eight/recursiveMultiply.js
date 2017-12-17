/*
  interview questions 8.5
*/

function recursiveMultiply(numA, numB) {
  const smaller = numA <= numB ? numA : numB;
  const bigger = numA > numB ? numA : numB;

  return multiplyHelper(smaller, bigger);
}

function multiplyHelper(smaller, bigger) {
  // base case
  if (smaller === 0) { return 0; }
  if (smaller === 1) { return bigger; }

  // divide into two
  const divideSmaller = smaller >> 1;
  const side1 = multiplyHelper(divideSmaller, bigger); // first half
  let side2 = side1;
  if (smaller % 2 === 1) {
    side2 = multiplyHelper(smaller - divideSmaller, bigger); // another half if neccesary
  }

  return side1 + side2

}

console.log(multiplyHelper(6, 6));


/*
  solution 2 (optimized with memorization)
*/

function recursiveMultiply2(numA, numB) {
  const smaller = numA <= numB ? numA : numB;
  const bigger = numA > numB ? numA : numB;
  return multiplyHelper2(smaller, bigger);
}

function multiplyHelper2(smaller, bigger, memo = []) {

  // base case and optimazation
  if (smaller === 0) { return 0; }
  if (smaller === 1) { return bigger; }
  if (memo[smaller] !== undefined ) { return memo[smaller] }

  // divide into two side
  let side1, side2;

  const divideSmaller = smaller >> 1;
  side1 = multiplyHelper2(divideSmaller, bigger, memo);

  side2 = side1;

  if (smaller % 2 === 1) {
    side2 = multiplyHelper2(smaller - divideSmaller, bigger, memo);
  }

  // cache the result
  memo[smaller] = side1 + side2;
  return side1 + side2

}

console.log(recursiveMultiply2(9, 5));

/*
  solution 3 (even more optimized without memorization)
*/

function recursiveMultiply3(numA, numB) {
  const smaller = numA <= numB ? numA : numB;
  const bigger = numA > numB ? numA : numB;

  if (smaller % 2 === 1) {
    return multiplyHelper3(smaller - 1, bigger) + bigger;
  }

  return multiplyHelper3(smaller, bigger);
}

function multiplyHelper3(smaller, bigger) {

  // base case and optimazation
  if (smaller === 0) { return 0; }
  if (smaller === 1) { return bigger; }

  // calculate one side and add twice
  const divideSmaller = smaller >> 1;
  const side1 = multiplyHelper3(divideSmaller, bigger);

  return side1 + side1

}

console.log(recursiveMultiply3(9, 11));
