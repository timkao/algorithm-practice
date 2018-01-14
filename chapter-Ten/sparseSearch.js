/*
  interview question 10.5
*/

function sparseSearch(arr, target, start = 0) {
  if (arr.length === 0) { return false }
  let mid = arr.length % 2 === 0 ? (arr.length / 2) - 1 : arr.length >> 1;
  if (arr[mid] === target) {
    return start + mid;
  }
  let tempMid = mid;
  while (arr[tempMid] === '') {
    if (arr[tempMid - 1] !== undefined && arr[tempMid - 1] !== '') {
      tempMid--
      mid = tempMid;
      break
    } else {
      tempMid--
    }
  }

  if (arr[tempMid] === undefined) {
    return sparseSearch(arr.slice(mid + 1, arr.length), target, start + mid + 1)
  } else if (arr[mid] === target) {
    return start + mid;
  } else if (arr[mid] > target) {
    return sparseSearch(arr.slice(0, mid), target, start)
  } else {
    return sparseSearch(arr.slice(mid + 1, arr.length), target, start + mid + 1)
  }

}


const test = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '' ];

console.log(sparseSearch(test, 'ball'))
console.log(sparseSearch(test, 'at'))
console.log(sparseSearch(test, 'car'))
console.log(sparseSearch(test, 'dad'))

