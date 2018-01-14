function mergeSort(arr) {
  if (arr.length < 2) { return arr }
    const splits = split(arr);
    const side1 = splits[0];
    const side2 = splits[1];

    // even if mergeSort(side1) finished first, it needs to wait for mergeSort(side2)
    return merge(mergeSort(side1), mergeSort(side2));

}

function split(arr) {
  let middlePoint = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, middlePoint)
  const arr2 = arr.slice(middlePoint);
  return [arr1, arr2]
}

console.log(split([2, 4, 8, 222, 99, 24, 45]));


function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;


  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++
    } else {
      result.push(right[rightIndex]);
      rightIndex++
    }
  }
  for (; leftIndex < left.length; leftIndex++) {
    result.push(left[leftIndex]);
  }
  for (; rightIndex < right.length; rightIndex++) {
    result.push(right[rightIndex]);
  }
  return result;

}

console.log(merge([2, 10, 33, 67], [9, 88, 99, 100, 112]));
console.log(mergeSort([2, 100, 33, 67, 4, 9, 88, 99, 112, 10]));
