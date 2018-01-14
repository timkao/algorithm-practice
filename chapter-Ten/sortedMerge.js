/*
  interview question 10.1
*/


let arrA = [12, 38, 91, 645, 990];
let arrB = [40, 44, 889];

function sortedMerge(bigArr, smallArr) {
  // without using splice method
  const temp = bigArr.slice(0);
  let index = 0;
  while (temp.length > 0 || smallArr.length > 0) {
    if (temp.length === 0) {
      while (smallArr.length > 0) {
        bigArr[index] = smallArr.shift();
        index++
      }
      break
    } else if (smallArr.length === 0) {
      while (temp.length > 0) {
        bigArr[index] = temp.shift();
        index++
      }
      break
    }
    if (temp[0] > smallArr[0]) {
      bigArr[index] = smallArr.shift();
      index++
    } else {
      bigArr[index] = temp.shift();
      index++
    }
  }

}

sortedMerge(arrA, arrB);
console.log(arrA)

/*
  efficiency
  Time: O(N + M)
  Space: O(N)
*/
