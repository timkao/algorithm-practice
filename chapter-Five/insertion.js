/*
  interview question 5.1
*/

function insertion(largeNum, smallNum, start, end) {
  // make the bit from i to j zero
  const startHelper = ( -1 << (start + 1) );
  const endHelper = ( 1 << end ) - 1;
  const helper = startHelper + endHelper;

  // change the position of smallNum and add it to LargeNum
  return (largeNum & helper) | (smallNum << end)
}

console.log(insertion(1024, 19, 6, 2)) // should return 1100
