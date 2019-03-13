var searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0 || target < matrix[0][0]) return false
  const rowHeads = matrix.map(row => row[0])
  const targetRow = bSearch(rowHeads, target, 0, rowHeads.length - 1)
  if (targetRow === true) return true
  const foundIt = bSearch(matrix[targetRow], target, 0, matrix[targetRow].length - 1)
  if (foundIt === true) return true
  return false
};

function bSearch(arr, target, start, end) {
  if (start > end) return end
  const cutPoint = start + Math.floor((end - start) / 2 )
  const cutNum = arr[cutPoint]
  if (target === cutNum) return true
  if (target > cutNum) return bSearch(arr, target, cutPoint + 1, end)
  if (target < cutNum) return bSearch(arr, target, start, cutPoint - 1)
}
