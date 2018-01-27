/*
  interview question 16.5
*/

function factorialZeros(num) {
  if (num === 0) { return 1; }
  const temp = {
    five: 0,
    two: 0
  }
  for (var i = 1; i <= num; i++) {
    let currValue = i;
    while (currValue % 2 === 0 || currValue % 5 === 0) {
      if (currValue % 2 === 0) {
        temp.two++
        currValue = currValue / 2
      }
      if (currValue % 5 === 0) {
        temp.five++
        currValue = currValue / 5
      }
    }
  }
  return Math.min(temp.five, temp.two)
}

console.log(factorialZeros(20));

function factorial(num) {
  if (num === 0) { return 0}
  let result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i
  }
  return result;
}

console.log(factorial(20))
