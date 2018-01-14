/*
  interview question 10.3
*/



function searchRotate(arr, target, left = 0) {
  if (arr.length === 0) { return false }

  let mid = arr.length % 2 === 0 ? (arr.length / 2) - 1 : arr.length >> 1;
  if (arr[mid] === target) {
    return left + mid;
  }

  if (arr[0] < arr[mid]) {
    // binary search left
    let leftResult = binarySearch(arr.slice(0, mid), target, left);
    if (leftResult !== false) {
      return leftResult;
    }
  }

  if (arr[mid] < arr[arr.length - 1]) {
    // binary search right
    let rightResult = binarySearch(arr.slice(mid + 1, arr.length), target, left + mid + 1)
    if (rightResult !== false) {
      return rightResult;
    }
  }

  if (arr[0] > arr[mid]) {
    return searchRotate(arr.slice(0, mid), target, left)
  }
  if (arr[mid] > arr[arr.length - 1]) {
    return searchRotate(arr.slice(mid + 1, arr.length), target, left + mid + 1)
  }


}


function binarySearch(arr, target, left = 0) {
  if (arr.length === 0) {
    return false;
  }

  let mid = arr.length % 2 === 0 ? (arr.length / 2) - 1 : arr.length >> 1;

  if (arr[mid] === target) {
    return left + mid;
  } else if (arr[mid] > target) {
    // search left
    return binarySearch(arr.slice(0, mid), target, left)
  } else {
    // search right
    return binarySearch(arr.slice(mid + 1, arr.length), target, left + mid + 1);
  }

}

console.log(binarySearch([43, 55, 56, 89, 111, 223, 225, 664], 664))
console.log(binarySearch([43, 55, 56, 89, 111, 223, 225, 664], 225))
console.log(binarySearch([43, 55, 56, 89, 111, 223, 225, 664], 223))
console.log(binarySearch([43, 55, 56, 89, 111, 223, 225, 664], 111))
console.log(binarySearch([43, 55, 56, 89, 111, 223, 225, 664], 89))
console.log(binarySearch([43, 55, 56, 89, 111, 223, 225, 664], 56))
console.log(binarySearch([43, 55, 56, 89, 111, 223, 225, 664], 55))
console.log(binarySearch([43, 55, 56, 89, 111, 223, 225, 664], 43))

const testArr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

console.log(searchRotate(testArr, 15));
console.log(searchRotate(testArr, 16));
console.log(searchRotate(testArr, 19));
console.log(searchRotate(testArr, 20));
console.log(searchRotate(testArr, 25));
console.log(searchRotate(testArr, 1));
console.log(searchRotate(testArr, 3));
console.log(searchRotate(testArr, 4));
console.log(searchRotate(testArr, 5));
console.log(searchRotate(testArr, 7));
console.log(searchRotate(testArr, 10));
console.log(searchRotate(testArr, 14));











