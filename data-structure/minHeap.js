const currHeap = [3, 9, 10, 15, 11, 12, 30, 16];

function bubbleUp(arr, heapLength) {
  if (heapLength - 1 === 0) {
    return arr;
  }
  const parentPointer = Math.floor(heapLength / 2) - 1;
  const currParent = arr[parentPointer];
  const lastValue = arr[heapLength - 1];
  if (lastValue > currParent) {
    return arr
  }
  // swap
  arr[parentPointer] = lastValue
  arr[heapLength - 1] = currParent;
  return bubbleUp(arr, parentPointer + 1);
}

function bubbleDown(arr, pointer = 0) {
  const leftChild = arr[pointer * 2 + 1];
  const rightChild = arr[pointer * 2 + 2];
  if (leftChild === undefined && rightChild === undefined) {
    return arr;
  }
  const currValue = arr[pointer];
  if (rightChild === undefined) {
    if (currValue <= leftChild) {
      return arr
    } else {
      arr[pointer] = leftChild;
      arr[pointer * 2 + 1] = currValue;
      return bubbleDown(arr, pointer * 2 + 1);
    }
  }
  if (currValue <= Math.min(leftChild, rightChild)) {
    return arr;
  }
  if (rightChild < leftChild) {
    arr[pointer] = rightChild;
    arr[pointer * 2 + 2] = currValue;
    return bubbleDown(arr, pointer * 2 + 2)
  } else {
    arr[pointer] = leftChild;
    arr[pointer * 2 + 1] = currValue;
    return bubbleDown(arr, pointer * 2 + 1);
  }

}

function insert(value, heap) {
  heap.push(value);
  bubbleUp(heap, heap.length);
}

insert(8, currHeap);
console.log(currHeap);
insert(2, currHeap);
console.log(currHeap)

function extractMin(heap) {
  const result = heap[0];
  heap[0] = heap.pop();
  bubbleDown(heap);
  return result;
}

extractMin(currHeap);
console.log(currHeap);
extractMin(currHeap);
console.log(currHeap);
