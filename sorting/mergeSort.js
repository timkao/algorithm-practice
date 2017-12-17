function mergeSort() {

}

function split(arr) {
  let middlePoint = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, middlePoint)
  const arr2 = arr.slice(middlePoint, arr.length);
  return [arr1, arr2]
}

console.log(split([2, 4, 8, 222, 99, 24, 45]));

function merge(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length ; i++) {
    if (arr2[0] !== undefined) {
      while ( arr1[i] > arr2[0]) {
        result.push(arr2.shift())
      }
      if (arr1[i] < arr2[0]) {
        result.push(arr1[i])
      }
    } else {
      result.push(arr1[i])
    }
  }

  if (arr2.length) {
    result = result.concat(arr2);
  }
  return result;
}

console.log(merge([2, 10, 33, 67], [4, 9, 88, 99, 100, 112]));
