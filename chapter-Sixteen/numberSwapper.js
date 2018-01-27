/*
  interview question 16.1
*/

function reverseNumber(num) {
  let temp = num;
  let expo = 0
  while ( temp > 10 ) {
    expo++
    temp = temp / 10
  }
  let result =  0;
  let sumPow = 0;
  while (expo >= 0) {
    let tempValue = Math.floor(num / Math.pow(10, expo))
    num = num % Math.pow(10, expo)
    result += tempValue * Math.pow(10, sumPow);
    sumPow++
    expo--
  }
  return result
}

console.log(reverseNumber(456))



/*
  solutions on the book.
*/

function numberSwapper(numObj) {
  numObj.first = numObj.first ^ numObj.second;
  numObj.second = numObj.first ^ numObj.second;
  numObj.first = numObj.first ^ numObj.second;
}

const test = {
  first: 90,
  second: 30
}

numberSwapper(test);
console.log(test)

function numberSwapper2(numObj) {
  numObj.first = numObj.second - numObj.first;
  numObj.second = numObj.second - numObj.first;
  numObj.first = numObj.second + numObj.first;
}

numberSwapper2(test);
console.log(test)



