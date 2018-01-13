var convert = function (s, numRows) {

  // calculate columns
  const columns = findColumns(s, numRows);

  // create a 2 layers array
  let currIndex = 0
  let result = '';
  const arr = [];
  for (var k = 0; k < numRows; k++) {
    arr[k] = [];
  }

  if (numRows % 2 === 1) {

    for (var i = 0; i < columns; i++) {
      for (var j = 0; j < numRows; j++) {
        if (i % 2 === 0) {
          arr[j][i] = s[currIndex];
          currIndex++
        } else if (j % 2 === 1) {
          arr[j][i] = s[currIndex];
          currIndex++
        } else {
          arr[j][i] = '';
        }
      }
    }
  } else {
    for (var i = 0; i < columns; i++) {
      for (var j = 0; j < numRows; j++) {
        if (i % 2 === 0) {
          arr[j][i] = s[currIndex];
          currIndex++
        } else if (j % 2 === 0) {
          arr[j][i] = s[currIndex];
          currIndex++
        } else {
          arr[j][i] = '';
        }
      }
    }
  }
  // const arr = [];
  // for (var i = 0; i < numRows; i++) {
  //   arr[i] = [];
  //   for (var j = 0; j < columns; j++) {
  //     if (i % 2 === 1) {
  //       arr[i][j] = true;
  //     } else if ( j % 2 === 0) {
  //       arr[i][j] = true;
  //     } else {
  //       arr[i][j] = false;
  //     }
  //   }
  // }

  // loop through the array


  // generate result
  for (var i = 0; i < arr.length; i++) {
    result += arr[i].join('');
  }

  return result
};

function findColumns(str, numRows) {
  let temp = numRows + (numRows >> 1);
  let rest = str.length % temp;
  if (rest === 0) {
    return Math.floor(str.length / temp) * 2
  } else if (rest <= numRows) {
    return Math.floor(str.length / temp) * 2 + 1
  } else {
    return Math.floor(str.length / temp) * 2 + 2
  }
}

console.log(convert("PAYPALISHIRING", 3))
console.log(convert("ABC", 2))
console.log(convert("ABCD", 2))
