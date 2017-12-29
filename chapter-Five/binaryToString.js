/*
  interview question 5.2
*/

function binaryToString(num) {

  if (num >= 1 || num <= 0) {
    throw new Error('not valid number')
  }

  let result = '0.';
  while ( num  > Math.floor(num)) {
    let temp = Math.floor((num * 2));
    result += temp;
    num = (num * 2) - temp
  }
  if (result.length >= 32) {
    throw new Error('not enought memory');
  }
  return result;
}

/*
  testing case
*/

console.log(binaryToString(0.75))
console.log((1.5 << 1))  // fractional number cannot use "bit operator"


/*
  efficiency
  Time: O(LogN)
  Space: O(1)
*/
