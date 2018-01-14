const testArr = [2, 6, 10, 7, 33, 72, 5, 3, 22, 101, 786, 23];

function quickSort(arr) {
  quickHelper(arr, 0, arr.length - 1);
}


function quickHelper(arr, left, right) {

  if ( left > right) {
    return
  }

  let wall = left;
  let pivot = arr[right];
  let index = left;
  while (index < right) {
    if (arr[index] < pivot) {
      let temp = arr[wall];
      arr[wall] = arr[index];
      arr[index] = temp;
      wall++;
    }
    index++;
  }
  arr[right] = arr[wall];
  arr[wall] = pivot;

  quickHelper(arr, left, wall - 1)
  quickHelper(arr, wall + 1, right)

}

quickSort(testArr);
console.log(testArr)


