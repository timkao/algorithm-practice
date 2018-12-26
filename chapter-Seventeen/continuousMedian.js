const assert = require('assert')

const MinHeap = require('../data-structure/minHeap')
const MaxHeap = require('../data-structure/maxHeap')

const ex = [16, 10, 9, 15, 30, 12, 11, 3];

function CMedian() {
  this.topHeap = new MinHeap()
  this.bottomHeap = new MaxHeap()
  this.size = 0
}

CMedian.prototype.insert = function(value) {
  if (this.size === 0) {
    this.bottomHeap.heapAdd(value)
  } else {
    const currMedian = this.getMedian()
    if (value <= currMedian) {
      this.bottomHeap.heapAdd(value)
    } else {
      this.topHeap.heapAdd(value)
    }
  }
  this.size += 1
  balanceSize(this.bottomHeap, this.topHeap)
}

CMedian.prototype.getMedian = function() {
  if (this.size === 0) return null
  if (this.size % 2 === 0) {
    return (this.topHeap.heap[0] + this.bottomHeap.heap[0]) / 2
  }
  return this.bottomHeap.heap[0]
}

function balanceSize(botHeap, topHeap) {
  const diff = botHeap.size - topHeap.size
  if (diff > 1) {
    topHeap.heapAdd(botHeap.extractHead())
  }
  if (diff <= -1) {
    botHeap.heapAdd(topHeap.extractHead())
  }
}

const continuousMedian = new CMedian()
ex.forEach(num => continuousMedian.insert(num))
assert.equal(continuousMedian.size, ex.length)
assert.equal(continuousMedian.getMedian(), 11.5)
