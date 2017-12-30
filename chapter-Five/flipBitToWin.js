/*
  intereview question 5.3
*/

function flipBitToWin(num) {
  let result = 0;
  const bitsArr = generateCountArr(num);

  for (var i = 0; i < bitsArr.length; i++) {
    if (bitsArr[i] === 0) {
      let prevValue = i === 0 ? 0 : bitsArr[i - 1];
      let nextValue = (i + 1) === bitsArr.length ? 0 : bitsArr[i + 1];
      let templength = prevValue + 1 + nextValue;
      if (templength > result) {
        result = templength
      }
    }
  }

  return result
}

function generateCountArr(num) {
  let countArr = []
  while ( num >= 1) {
     if (num % 2 === 0) {
       countArr.push(0);
     } else {
       if (countArr.length === 0 || countArr[countArr.length - 1] === 0) {
         countArr.push(1);
       } else if (countArr[countArr.length - 1] > 0) {
         countArr[countArr.length - 1]++
       }
     }
     num = num >> 1
   }

  return countArr;
}


/*
  testing case
*/
console.log(flipBitToWin(1775))


/*
  Efficiency
  Time: O(b)
  Space: O(b)
*/
