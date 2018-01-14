const testArr = [1, 2, 3, 5, 8, 9, 11, 22, 34, 45, 77, 100, 111];
const testArr2 = [1, 12];

function find(arr, target, left = 0) {
    if (arr.length === 0) {
      return false;
    }
    let mid = arr.length % 2 === 0 ? (arr.length / 2) - 1 : arr.length >> 1;
    if (arr[mid] === target) {
      return left + mid;
    } else if (arr[mid] > target) {
      // search left
      return find(arr.slice(0, mid), target, left)
    } else {
      // search right
      return find(arr.slice(mid + 1, arr.length), target, left + mid + 1);
    }
}

console.log(find(testArr, 34))
console.log(find(testArr2, 1))
