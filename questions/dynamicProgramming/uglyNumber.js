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


/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumberOpt = function(n) {
  var res = [1];
  var i2=0, i3=0, i5=0;
  while(res.length <n) {
    var m2 = res[i2]*2;
    var m3 = res[i3]*3;
    var m5 = res[i5]*5;
    var mn = Math.min(m2, Math.min(m3, m5));
    if(mn === m2) i2++;
    if(mn === m3) i3++;
    if(mn === m5) i5++;
    res.push(mn);
  }
  return res[res.length-1];
};
