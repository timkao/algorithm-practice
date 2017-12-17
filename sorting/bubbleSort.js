function bubbleSort(arr) {
  let temp;
  let count = 0;
  let sorted = false;
  while (count < arr.length && !sorted) {
    sorted = true;
    count++;
    for ( let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 3, 45, 2, 20, 6]))
