const testArr = [1, 2, 3, 5, 8, 9, 11, 22, 34, 45, 77, 100, 111];
const testArr2 = [1, 12];

function find(arr, target) {
  let start;

  if (arr.length === 0) {
    return false;
  }

  if (arr.length % 2 === 0) {
    start = (arr.length / 2) - 1
  } else {
    start = arr.length >> 1;
  }

  if (arr[start] === target) {
    return start;
  } else if ( arr[start] < target) {
    return find(arr.slice(start + 1, arr.length));
  } else {
    return find(arr.slice(0, start));
  }

}

console.log(find(testArr, 11))
console.log(find(testArr2, 1))
