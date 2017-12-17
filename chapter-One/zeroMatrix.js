/*
  interview question 1.8
*/

function zeroMatrix(arr) {

  if (arr.length === 0 ) {
    return arr;
  }

  const mLength = arr[0].length;
  const nLength = arr.length;
  const zeroPositionM = [];
  const zeroPositionN = []

  for (let i = 0; i < nLength; i++) {
    for (let j = 0; j  < mLength; j++) {
      if (arr[i][j] === 0) {
        zeroPositionM[j] = true;
        zeroPositionN[i] = true;
      }
    }
  }

  for (let k = 0; k < zeroPositionM.length; k++) {
    if (zeroPositionM[k]) {
      setColumnToZero(arr, k)
    }
  }

  for (let m = 0; m < zeroPositionN.length; m++) {
    if (zeroPositionN[m]) {
      setRowToZero(arr, m)
    }
  }

  return arr;

}


function setColumnToZero(arr, index) {
  for (let i = 0; i < arr.length; i++) {
    arr[i][index] = 0;
  }
}

function setRowToZero(arr, index) {
  for (let i = 0; i < arr[index].length; i++) {
    arr[index][i] = 0;
  }
}

console.log(zeroMatrix([
  [5, 10, 1, 4],
  [3, 8, 0, 5],
  [4, 2, 0, 6],
  [23, 97, 3, 71],
  [5, 15, 34, 8]
]));

/*
  efficiency
  space: O(N)
  time: O(MN)
*/
