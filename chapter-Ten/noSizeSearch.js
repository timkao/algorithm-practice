/*
  intereview question 10.4
*/

function noSizeSearch(arr, target, start = 0) {
  if (arr.length === 0) { return false }

  // find the rough size
  let pow = 0
  while (arr[pow] !== undefined) {
    if (pow === 0) { pow++ }
    else { pow *= 2 }
  }
  // binary search
  if (pow === 1) { pow = 0}
  else { pow = pow >> 1}
  let mid = pow;
  if (arr[mid] === target) {
    return start + mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr.slice(0, mid), target, start)
  } else {
    return noSizeSearch(arr.slice(mid + 1), target, start + mid + 1)
  }
}

function binarySearch(arr, target, left = 0) {
  if (arr.length === 0) { return false }
  let mid = arr.length % 2 === 0 ? (arr.length / 2) - 1 : arr.length >> 1;

  if (arr[mid] === target) {
    return left + mid
  } else if (arr[mid] > target) {
    return binarySearch(arr.slice(0, mid), target, left);
  } else {
    return binarySearch(arr.slice(mid + 1, arr.length), target, left + mid + 1)
  }
}


const testing = [1, 4, 9, 10, 34, 35, 36, 40, 101, 1111, 1112, 1113, 2200]

console.log(noSizeSearch(testing, 2200))  // 12
console.log(noSizeSearch(testing, 1113))  // 11
console.log(noSizeSearch(testing, 1112))  // 10
console.log(noSizeSearch(testing, 1111))  // 9
console.log(noSizeSearch(testing, 101))   //  8
console.log(noSizeSearch(testing, 40))   //  7


