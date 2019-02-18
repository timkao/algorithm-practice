var maximalRectangle = function(matrix) {
  if (matrix.length === 0) return 0
  const left = []
  const right = []
  const height = []
  for (let i = 0; i < matrix.length; i++) {
      left[i] = []
      right[i] = []
      height[i] = []
  }
  generateLeft(matrix, left)
  generateRight(matrix, right)
  generateHeight(matrix, height)
  let result = 0
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
          if (matrix[row][col] === '1') {
              const area = (right[row][col] - left[row][col] + 1) * height[row][col]
              result = Math.max(area, result)
          }

      }
  }
  return result
};

function generateLeft(matrix, left) {
  let curLeft = -1
  for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[0][i] === '0') {
          left[0][i] = -1
          curLeft = -1
      } else {
          if (curLeft === -1) curLeft = i
          left[0][i] = curLeft
      }
  }
  for (let row = 1; row < matrix.length; row++) {
      curLeft = -1
      for (let col = 0; col < matrix[0].length; col++) {
          if (matrix[row][col] === '0') {
              left[row][col] = -1
              curLeft = -1
          } else {
              if (curLeft === -1) curLeft = col
              left[row][col] = Math.max(left[row - 1][col], curLeft)
          }
      }
  }
}

function generateRight(matrix, right) {
  let curRight = matrix[0].length
  for (let i = matrix[0].length - 1; i >= 0; i--) {
      if (matrix[0][i] === '0') {
          right[0][i] = matrix[0].length
          curRight = matrix[0].length
      } else {
          if (curRight === matrix[0].length) curRight = i
          right[0][i] = curRight
      }
  }
  for (let row = 1; row < matrix.length; row++) {
      curRight = matrix[0].length
      for (let col = matrix[0].length - 1; col >= 0; col--) {
          if (matrix[row][col] === '0') {
              right[row][col] = matrix[0].length
              curRight = matrix[0].length
          } else {
              if (curRight === matrix[0].length) curRight = col
              right[row][col] = Math.min(right[row - 1][col], curRight)
          }
      }
  }
}

function generateHeight(matrix, height) {
  for (let i = 0; i < matrix[0].length; i++) {
      height[0][i] = Number(matrix[0][i])
  }
  for (let row = 1; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
          if (matrix[row][col] === '0') {
              height[row][col] = 0
          } else {
              height[row][col] = height[row - 1][col] + 1
          }
      }
  }
}
