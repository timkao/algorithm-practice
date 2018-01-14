const testArr = [2, 3, 6, 10, 7, 33, 72, 5, 22, 101, 786, 23]


function bubbleSort(arr) {
  let isSorted = false;
  for (var j = 0; j < arr.length; j++) {
    if (!isSorted) {
      isSorted = true;
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          isSorted = false;
        }
      }
    }
  }
}

bubbleSort(testArr);
console.log(testArr)
