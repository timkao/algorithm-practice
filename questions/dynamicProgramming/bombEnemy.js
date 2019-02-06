/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  const rowDp = generateRowDp(grid)
  console.log(rowDp)
  const colDp = generateColDp(grid)
  console.log(colDp)
  return findMax(rowDp, colDp)
};

function generateRowDp(grid) {
  const result = []
  for (let row = 0; row < grid.length; row++) {
      let currDamage = 0
      const currRow = grid[row]
      if (result[row] === undefined) result[row] = []
      for (let col = 0; col < currRow.length; col++) {
          const currChar = grid[row][col]
          if (currChar === 'E') {
              currDamage += 1
              result[row][col] = 'E'
              updateRow(result[row], col, currDamage)
          } else if (currChar === 'W') {
              currDamage = 0
              result[row][col] = 'W'
          } else if (currChar === '0') {
              result[row][col] = currDamage
          }
      }
  }
  return result
}

function updateRow(targetRow, col, number) {
  for (let i = col - 1; i >= 0; i--) {
      if (targetRow[i] === 'W') {
          return
      } else if (targetRow[i] === 'E') {
          continue
      } else {
          targetRow[i] = number
      }
  }
}

function generateColDp(grid) {
  const result = []
  for (let col = 0; col < grid[0].length; col++) {
      let currDamage = 0
      for (let row = 0; row < grid.length; row++) {
          if (result[row] === undefined) result[row] = []
          const currChar = grid[row][col]
          if (currChar === 'E') {
              currDamage += 1
              result[row][col] = 'E'
              updateCol(result, row, col, currDamage)
          } else if (currChar === 'W') {
              currDamage = 0
              result[row][col] = 'W'
          } else if (currChar === '0') {
              result[row][col] = currDamage
          }
      }
  }
  return result
}

function updateCol(grid, row, col, number) {
  for (let i = row - 1; i >= 0; i--) {
      if (grid[i][col] === 'W') {
          return
      } else if (grid[i][col] === 'E') {
          continue
      } else {
          grid[i][col] = number
      }
  }
}
