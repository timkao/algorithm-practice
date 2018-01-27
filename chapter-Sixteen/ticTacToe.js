/*
  interview question 16.4
*/

function winOrNot(arr) {
  const winsPatterns = [
    [1, 2, 3], [1, 4, 7],
    [1, 5, 9], [2, 5, 8],
    [3, 5, 7], [3, 6, 9],
    [4, 5, 6], [7, 8, 9]
  ];

  for (var i = 0; i < winsPatterns.length; i++) {
    let countA = 0;
    let countB = 0;
    for (var j = 0; j < winsPatterns[i].length; j++) {
      let currIndex = winsPatterns[i][j] - 1;
      if (arr[currIndex] === 'A') {
        countA++
      } else if (arr[currIndex] === 'B') {
        countB++
      }
      if (countA > 0 && countB > 0) { break }
    }
    if (countA === 3) { return 'A'}
    if (countB === 3) { return 'B'}
  }

  return 'Dual'
}


console.log(winOrNot(['A', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'A'])) // A
console.log(winOrNot(['A', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'B'])) // B
console.log(winOrNot(['A', 'B', 'A', 'B', 'A', 'B', 'B', 'A', 'B'])) // Dual


/*
  in the case of N X N
*/

// check column
// check row
// check diagonal


