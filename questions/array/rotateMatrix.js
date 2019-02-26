var rotate = function(matrix) {
  return performRotate(matrix, 0, matrix.length - 1)
};

function performRotate(matrix, start, end) {
  if (start >= end) return
  for (let i = 0; i < (end - start); i++) {
      const prevRT = matrix[start + i][end]
      matrix[start + i][end] = matrix[start][start + i]
      const prevRB = matrix[end][end - i]
      matrix[end][end - i] = prevRT
      const prevLB = matrix[end - i][start]
      matrix[end - i][start] = prevRB
      matrix[start][start + i] = prevLB
  }
  performRotate(matrix, start + 1, end - 1)
}
