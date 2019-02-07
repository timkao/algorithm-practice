/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.rowDp = []
  this.colDp = []
  this.diaDp = [[0, 0], [0, 0]]
  for (let i = 0; i < n; i++) {
      this.rowDp.push([0, 0])
      this.colDp.push([0, 0])
  }
};

/**
* Player {player} makes a move at ({row}, {col}).
      @param row The row of the board.
      @param col The column of the board.
      @param player The player, can be either 1 or 2.
      @return The current winning condition, can be either:
              0: No one wins.
              1: Player 1 wins.
              2: Player 2 wins.
* @param {number} row
* @param {number} col
* @param {number} player
* @return {number}
*/
TicTacToe.prototype.move = function(row, col, player) {
  const target = this.rowDp.length
  this.rowDp[row][player - 1] += 1
  if (this.rowDp[row][player - 1] === target) return player
  this.colDp[col][player - 1] += 1
  if (this.colDp[col][player - 1] === target) return player
  if (row === col) {
      this.diaDp[0][player - 1] += 1
      if (this.diaDp[0][player - 1] === target) return player
  }
  if (row + col === target - 1) {
      this.diaDp[1][player - 1] += 1
      if (this.diaDp[1][player - 1] === target) return player
  }
  return 0
};

/**
* Your TicTacToe object will be instantiated and called as such:
* var obj = Object.create(TicTacToe).createNew(n)
* var param_1 = obj.move(row,col,player)
*/
