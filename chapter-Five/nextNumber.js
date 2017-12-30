/*
  interview question 5.4
*/

function findNext(num) {
  if (num === 0) {return "not valid number"}
  let temp = num
  let ones = 0;
  let zeros = 0;

  // find how many continuous 1
  while (temp >= 1) {
    if (temp % 2 === 1) {
      ones++
    }
    else {
      if (ones > 0 && zeros >= 0) {
        break
      }
      zeros++
    }
    temp = Math.floor(temp / 2);
  }

  const andHelper = ( -1 << (ones + zeros) );
  const trailHelper = (1 << (ones + zeros ));
  const onesHelper = (1 << (ones - 1)) - 1

  return ( num & andHelper) + trailHelper + onesHelper

}

console.log('------ find next ------')
console.log(findNext(38))
console.log(findNext(19))
console.log(findNext(36))
console.log(findNext(0))
console.log(findNext(1))



function findPrev(num) {
  if (num === 0 || num === 1) {return "not valid number"}

  // find how many bits the num has
  let bits = 0;
  let ones = 0;
  while (num >= 1) {
    if (num % 2 === 1) {
      ones++
    }
    bits++
    num = num >> 1;
  }

  let result = ( 1 << (bits - 2));

  // for (var i = 1; i < ones; i++) {
  //   result += Math.pow(2, bits - 2 - i)
  // }

  // without for loop
  let trails = Math.pow(2, (bits - 2)) - 1;
  let zeros = ( -1 << (bits - 2 - (ones - 1)));

  return result + (trails & zeros)

}

console.log('------ find prev ------')

console.log(findPrev(16))
console.log(findPrev(19))
console.log(findPrev(2))
console.log(findPrev(0))
console.log(findPrev(1))


/*
  Efficiency
  Time: O(logN)
  space: O(1)
*/
