const combine = function(sortedArr1, sortedArr2) {
  const result = [];

  while (sortedArr1.length !== 0 || sortedArr2.length !== 0) {

    if (sortedArr1.length !== 0 && sortedArr2.length !== 0) {
      if (sortedArr1[0] < sortedArr2[0]) {
        result.push(sortedArr1.shift());
      } else {
        result.push(sortedArr2.shift());
      }
    }

    if (sortedArr1.length === 0) {
      for (var i = 0; i < sortedArr2.length; i++) {
        result.push(sortedArr2.shift())
      }
    }

    if (sortedArr2.length === 0) {
      for (var i = 0; i < sortedArr1.length; i++) {
        result.push(sortedArr1.shift())
      }
    }

  }
  return result;
}

console.log(divide([4, 5, 1, 10, 3]));
console.log(combine([4, 5, 10, 12], [8, 9, 19]));

const mergeSort = function (arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  const breakpoint = Math.ceil(arr.length / 2);
  const arr1 = arr.slice(0, breakpoint);
  const arr2 = arr.slice(breakpoint, arr.length);

  return combine(mergeSort(arr1), mergeSort(arr2));

}

console.log(mergeSort([4, 5, 1, 10, 3]));
