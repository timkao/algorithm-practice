var searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false
  let startRow = matrix.length - 1
  let startCol = 0
  while (startRow >= 0 && startCol <= matrix[0].length - 1) {
      const startPoint = matrix[startRow][startCol]
      if (target === startPoint) return true
      if (target > startPoint) startCol += 1
      if (target < startPoint) startRow -= 1
  }
  return false
};
