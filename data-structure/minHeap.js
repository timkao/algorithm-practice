const assert = require('assert')
const ex = [16, 10, 9, 15, 30, 12, 11, 3];

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

function MinHeap() {
  this.heap = []
  this.size = 0
}

MinHeap.prototype.heapAdd = function(value) {
  this.heap.push(value)
  bubbleUp(this.heap, this.heap.length)
  this.size += 1
}

MinHeap.prototype.extractHead = function() {
  const result = this.heap[0]
  this.heap[0] = this.heap.pop()
  bubbleDown(this.heap)
  this.size -= 1
  return result
}

const minHeap = new MinHeap()

ex.forEach(num => {
  minHeap.heapAdd(num)
})

assert.equal(minHeap.size, ex.length)
assert.equal(minHeap.extractHead(), Math.min(...ex))
assert.equal(minHeap.size, ex.length - 1)
assert.equal(minHeap.extractHead(), 9)
assert.equal(minHeap.size, ex.length - 2)

module.exports = MinHeap
