var kthSmallest = function(matrix, k) {
  // binary search, search range
  let lo = matrix[0][0]
  let hi = matrix[matrix.length - 1][matrix[0].length - 1]
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2) // find the mid value
    let col = matrix[0].length - 1
    let count = 0
    // go through all rows to find how many elements are smaller than mid
    // the operation is correct since rows and cols in the matrix are sorted
    for (let row = 0; row < matrix.length; row++) {
      while (col >= 0 && matrix[row][col] > mid) {
        col -= 1
      }
      count += col + 1
    }
    if (count < k) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return lo
};


var kthSmallestRecursive = function(matrix, k) {
  let lo = matrix[0][0]
  let hi = matrix[matrix.length - 1][matrix[0].length - 1]
  return binarySearch(matrix, k, lo, hi)
};

// binary search, search range
function binarySearch(matrix, k, min, max) {
  if (min > max) return min
  const mid = min + Math.floor((max - min) / 2)
  let count = 0
  let col = matrix[0].length - 1
  for (let row = 0; row < matrix.length; row++) {
      while (col >= 0 && matrix[row][col] > mid) col -= 1
      count += col + 1
  }
  if (count < k) {
      min = mid + 1
  } else {
      max = mid - 1
  }
  return binarySearch(matrix, k, min, max)
}
