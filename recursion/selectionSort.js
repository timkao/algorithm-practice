
/* should sort the numbers in place */
function selectionSort(numArr, head = 0, move = 1) {
  if (head === numArr.length - 1) {
    return numArr;
  }
  const curr = numArr[head];
  if (numArr[move] < numArr[head]) {
    numArr[head] = numArr[move];
    numArr[move] = curr;
  }

  if (move === numArr.length - 1) {
    return selectionSort(numArr, head + 1, head + 2)
  } else {
    return selectionSort(numArr, head, move + 1)
  }

}

console.log(selectionSort([8, 5, 2, 10, 6]))
