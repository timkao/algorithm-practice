const assert = require('assert')

function MaxHeap() {
  this.heap = []
  this.size = 0
}

MaxHeap.prototype.heapAdd = function(value) {
  this.heap.push(value)
  heapBubbleUp(this.heap, this.heap.length - 1)
  this.size += 1
}

MaxHeap.prototype.extractHead = function() {
  const result = this.heap[0]
  this.heap[0] = this.heap.pop()
  heapBubbleDown(this.heap)
  this.size -= 1
  return result
}

function heapBubbleUp(arr, pointer) {
  if (pointer <= 0) return

  const parentPointer = findParent(pointer)
  if (arr[parentPointer] > arr[pointer]) {
    return
  } else {
    swap(arr, parentPointer, pointer)
    heapBubbleUp(arr, parentPointer)
  }
}

function findParent(pointer) {
  return Math.ceil((pointer / 2) - 1)
}

function swap(arr, parent, child) {
  const temp = arr[parent]
  arr[parent] = arr[child]
  arr[child] = temp
}

function heapBubbleDown(arr, pointer = 0) {
  const [leftPointer, rightPointer] = findChildren(pointer)
  const currValue = arr[pointer]
  const left = arr[leftPointer]
  const right = arr[rightPointer]

  if (left === undefined && right === undefined) {
    return
  }
  if (left !== undefined && right === undefined && currValue < left) {
    swap(arr, pointer, leftChild)
    return
  }
  if (left !== undefined && right !== undefined && currValue > Math.max(left, right)) {
    return
  }
  if (left > right) {
    swap(arr, pointer, leftPointer)
    heapBubbleDown(arr, leftPointer)
  } else {
    swap(arr, pointer, rightPointer)
    heapBubbleDown(arr, rightPointer)
  }
}

function findChildren(pointer) {
  return [pointer * 2 + 1, pointer * 2 + 2]
}

const exHeap = new MaxHeap()

exHeap.heapAdd(8)
exHeap.heapAdd(19)
exHeap.heapAdd(15)
exHeap.heapAdd(26)
exHeap.heapAdd(10)
exHeap.heapAdd(82)
exHeap.heapAdd(20)
exHeap.heapAdd(6)
exHeap.heapAdd(7)
exHeap.heapAdd(55)
assert.equal(exHeap.extractHead(), 82)
assert.equal(exHeap.size, 9)
assert.equal(exHeap.extractHead(), 55)
assert.equal(exHeap.size, 8)

module.exports = MaxHeap

