/*
  interview quesiton 10.9
*/

/*
  the first function is not 100% correct
*/
function searchMatrix(matrix, target, rowStart = 0, colStart = 0, colEnd, rowEnd){
  const firstArr = matrix[0];
  if (colStart === matrix.length) {
    return false
  }
  if (colEnd !== undefined && colEnd === colStart) { return false }
  if (rowStart === firstArr.length) { return false}
  if (rowEnd !== undefined && rowEnd === rowStart) { return false }


  let rowMid;
  if (rowEnd === undefined) {
    rowMid = (firstArr.length - rowStart) % 2 === 0 ? ((firstArr.length - rowStart) / 2) - 1: (firstArr.length - rowStart) >> 1;
  } else {
    rowMid = (rowEnd - rowStart) % 2 === 0 ? ((rowEnd - rowStart) / 2) - 1 : (rowEnd - rowStart) >> 1;
  }

  //console.log('colEnd', colEnd)
  let colMid;
  if (colEnd === undefined) {
    colMid = (matrix.length - colStart) % 2 === 0 ? ((matrix.length - colStart) / 2) - 1 : (matrix.length - colStart) >> 1;
  } else {

    colMid = (colEnd - colStart) % 2 === 0 ? ((colEnd - colStart) / 2) - 1 : (colEnd - colStart) >> 1;

  }

  let colResult
  //console.log(firstArr.length)

  const currValue = matrix[colStart + colMid][rowStart + rowMid];
  if (currValue === target) {
    return [colStart + colMid, rowStart + rowMid]
  } else if (currValue < target) {
    // update column
    colResult = searchMatrix(matrix, target, rowStart, colStart + colMid + 1)
    if (colResult !== false) {
      return colResult
    } else {
      // update row
      if (target > firstArr[rowMid]) {
        return searchMatrix(matrix, target, rowStart + rowMid + 1, 0)
      } else {
        return searchMatrix(matrix, target, rowStart, 0, undefined, rowStart + rowMid)
      }
    }
  } else {
    console.log('rowMid', rowMid)
    console.log('rowstart', rowStart)
    console.log('colStart', colStart)
    console.log('colMid', colMid)
    console.log('value', currValue)
    console.log('colEnd', colEnd)

    colResult = searchMatrix(matrix, target, rowStart, colStart, colStart + colMid, rowStart + rowMid)
    if (colResult !== false) {
      return colResult
    } else {
      if (target > firstArr[rowMid]) {
        return searchMatrix(matrix, target, rowStart + rowMid + 1, 0)
      } else {
        return searchMatrix(matrix, target, rowStart, 0, undefined, rowStart + rowMid)
      }
    }
  }
}

//console.log(searchMatrix(testMatrix, 42))
//console.log(searchMatrix(testMatrix, 9))
//console.log(searchMatrix(testMatrix, 70))
//console.log(searchMatrix(testMatrix, 50))
//console.log(searchMatrix(testMatrix, 32))
//console.log(searchMatrix(testMatrix, 41))


/*
  following is the solution in the book
*/


const testMatrix = [
  [9, 23, 31, 32, 40],
  [10, 35, 37, 41, 42],
  [17, 36, 42, 50, 51],
  [20, 52, 60, 70, 72]
]

function searchMatrixFinal(matrix, target) {
  const origin = new Coordinate(0, 0);
  const dest = new Coordinate(matrix.length - 1, matrix[0].length - 1);
  return findElement(matrix, origin, dest, target);
}


function findElement(matrix, origin, dest, target) {

  // if origin or destination have gone out of Matrix, that means the target is not in the Matrix
  if (!origin.inbounds(matrix) || !dest.inbounds(matrix)) {
    return null
  }

  // base case, if the origin is the target, then return the origin.
  // the origin is keep changing in the recursive call
  if (matrix[origin.row][origin.column] === target) {
    return origin
  } else if (!origin.isBefore(dest)) {
    // if origin has surpassed destination, this also means the target is not in the Matrix
    return null
  }


  // find the "start" and the "end" of the diagonal line
  let start = origin.clone();
  let diagDist = Math.min(dest.row - origin.row, dest.column - origin.column)
  // the adjustment is necessary since "end" will not be "dest" if the matrix is not a square
  let end = new Coordinate(start.row + diagDist, start.column + diagDist)
  let curr = new Coordinate(0, 0)

  while (start.isBefore(end)) {
    // take the midpoint of the diagonal line, simulate binary search in the diagonal line
    curr.setToAverage(start, end)
    if (target > matrix[curr.row][curr.column]) {
      start.row = curr.row + 1;
      start.column = curr.column + 1
    } else {
      end.row = curr.row - 1;
      end.column = curr.column - 1;
    }
  }

  // use the new "start" to separate the matrix into sub Matrixs
  return partitionAndSearch(matrix, origin, dest, start, target)
}


function partitionAndSearch(matrix, origin, dest, pivot, target) {
  // the answer will always be in the lowerLeft or upperRight sections
  // so find the origin and the destination of the two sub matrix
  const lowerLeftOrigin = new Coordinate(pivot.row, origin.column);
  const lowerLeftDest = new Coordinate(dest.row, pivot.column - 1);

  const upperRightOrigin = new Coordinate(origin.row, pivot.column);
  const upperRightDest = new Coordinate(pivot.row - 1, dest.column);

  // search for the target in those two sections should give us the answer
  const lowerLeft = findElement(matrix, lowerLeftOrigin, lowerLeftDest, target)
  if (lowerLeft !== null) {
    return lowerLeft
  } else {
    return findElement(matrix, upperRightOrigin, upperRightDest, target)
  }
}

function Coordinate(r, l) {
  this.row = r;
  this.column = l;
}

Coordinate.prototype.inbounds = function(matrix) {
  return this.row >= 0 && this.column >= 0 && this.row < matrix.length && this.column < matrix[0].length
}

Coordinate.prototype.isBefore = function(cor){
  return this.row <= cor.row && this.column <= cor.column
}

Coordinate.prototype.clone = function() {
  return new Coordinate(this.row, this.column);
}

Coordinate.prototype.setToAverage = function(minCor, maxCor) {
  this.row = Math.floor((minCor.row + maxCor.row) / 2);
  this.column = Math.floor((minCor.column + maxCor.column) / 2);
}


console.log(searchMatrixFinal(testMatrix, 42))
console.log(searchMatrixFinal(testMatrix, 9))
console.log(searchMatrixFinal(testMatrix, 70))
console.log(searchMatrixFinal(testMatrix, 50))
console.log(searchMatrixFinal(testMatrix, 32))
console.log(searchMatrixFinal(testMatrix, 41))
