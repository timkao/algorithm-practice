var nthUglyNumber = function(n) {
  const factors = [2, 3, 5]
  const dp = []
  const minHeap = new MinHeap()
  minHeap.add(1)
  const memo = [true, true]
  for (var i = 0; i < n; i++) {
      const currMin = minHeap.takeMin()
      dp[i] = currMin
      for (var j = 0; j < factors.length; j++) {
          const newNum = factors[j] * currMin
          if (memo[newNum] !== true) {
              minHeap.add(newNum)
              memo[newNum] = true
          }
      }
  }
  return dp[n - 1]
};

function MinHeap() {
  this.heap = []
}

MinHeap.prototype.add = function(val) {
  if (this.heap.length === 0) {
      this.heap[0] = val
  } else {
     this.heap.push(val)
     bubbleUp(this.heap, this.heap.length - 1)
  }
}

MinHeap.prototype.takeMin = function() {
  if (this.heap.length === 1) return this.heap.pop() // edge case, be careful!!
  const result = this.heap[0]
  this.heap[0] = this.heap.pop()
  bubbleDown(this.heap)
  return result
}

function bubbleDown(arr, start = 0) {
  const leftP = start * 2 + 1
  const rightP = start * 2 + 2
  if (arr[leftP] === undefined && arr[rightP] === undefined) return
  if (arr[leftP] === undefined && arr[rightP] !== undefined) {
      if (arr[start] < arr[rightP]) return
      swap(arr, start, rightP)
      return bubbleDown(arr, rightP)
  }
   if (arr[leftP] !== undefined && arr[rightP] === undefined) {
      if (arr[start] < arr[leftP]) return
      swap(arr, start, leftP)
      return bubbleDown(arr, leftP)
  }
  if (arr[start] < arr[leftP] && arr[start] < arr[rightP]) return
  if (arr[leftP] < arr[rightP]) {
      swap(arr, start, leftP)
      return bubbleDown(arr, leftP)
  } else {
      swap(arr, start, rightP)
      return bubbleDown(arr, rightP)
  }
}

function bubbleUp(arr, start) {
  const parent = Math.floor((start - 1) / 2)
  if (arr[start] < arr[parent]) {
      swap(arr, start, parent)
      return bubbleUp(arr, parent)
  }
}

function swap(arr, p1, p2) {
  const temp = arr[p1]
  arr[p1] = arr[p2]
  arr[p2] = temp
}
