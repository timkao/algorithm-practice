const testArr = [2, 3, 6, 10, 7, 33, 72, 5, 22, 101, 786, 23]


function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid;
  let leftPart = [];
  let rightPart = [];
  if (arr.length > 1) {
    mid = arr.length % 2 === 0 ? (arr.length / 2) - 1 : arr.length >> 1;
    leftPart = mergeSort(arr.slice(0, mid + 1))
    rightPart = mergeSort(arr.slice(mid + 1, arr.length))
  }

  return merge(leftPart, rightPart);

}


function merge(left, right) {
  let result = [];
  while (left.length > 0 || right.length > 0) {
    if (left.length === 0) {
      result = result.concat(right);
      break;
    } else if (right.length === 0) {
      result = result.concat(left);
      break;
    } else {
      if (left[0] > right[0]) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }
  }
  return result;
}

console.log(mergeSort(testArr));
console.log(mergeSort([2, 100, 33, 67, 4, 9, 88, 99, 112, 10]))
