/*
  interview question 16.6
*/

function smallestDiff(arr1, arr2){
  arr1.sort((a, b) => a - b > 0);
  arr2.sort((a, b) => a - b > 0);
  let index1 = 0;
  let index2 = 0;
  let result = null
  while (index1 < arr1.length && index2 < arr2.length) {
    let dif;
    if (arr1[index1] === arr2[index2]) { return 0 }
    if (arr1[index1] < arr2[index2]) {
      dif = arr2[index2] - arr1[index1];
      if (result === null) { result = dif }
      if (dif < result ) { result = dif }
      index1++
    } else if (arr1[index1] > arr2[index2]) {
      dif = arr1[index1] - arr2[index2];
      if (result === null) { result = dif }
      if (dif < result ) { result = dif }
      index2++
    }
  }
  return result;
}

console.log(smallestDiff([23, 127, 235, 19, 8], [1, 3, 15, 11, 2]))
