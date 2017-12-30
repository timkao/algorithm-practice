/*
  interview question 5.6
*/

function conversion(numOne, numTwo) {
  let helper = numOne ^ numTwo;
  let result = 0;
  while (helper >= 1) {
    if (helper % 2 === 1) {
      result++
    }
    helper = helper >> 1;
  }
  return result
}

console.log(conversion(29, 15))
