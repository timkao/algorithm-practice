const insert = function(arr, comPointer, valPointer, val) {
  if (val > arr[comPointer]) {
    let times = valPointer - comPointer;
    while (times > 0) {
      arr[comPointer + times] = arr[comPointer + times - 1]
      times--;
    }
    arr[comPointer + 1] = val;
    return arr;
  } else if (comPointer === 0) {
    let times = valPointer - comPointer;
    while (times > 0) {
      arr[comPointer + times] = arr[comPointer + times - 1]
      times--;
    }
    arr[comPointer] = val;
    return arr;
  }
  else {
    comPointer = comPointer - 1;
    return insert(arr, comPointer, valPointer, val)
  }
}

const insertionSort = function(arr, sortedPointer = 0, unSortedPointer = 1) {
  if (arr.length === 0 || arr.length === 1 || sortedPointer === arr.length - 1) {
    return arr;
  }

  if (arr[sortedPointer] < arr[unSortedPointer]) {
    return insertionSort(arr, sortedPointer + 1, unSortedPointer + 1);
  } else {
    const temp = arr[unSortedPointer];
    insert(arr, sortedPointer, unSortedPointer, temp);
    return insertionSort(arr, sortedPointer + 1, unSortedPointer + 1);
  }

}

console.log(insertionSort([10, 3, 8, 12, 2, 5, 1]));
