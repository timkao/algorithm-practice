const arr = [
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"],
];

function spiral(matrix, sr, sc, er, ec) {
  if (sr <= er) {
  for (var i = sr; i <= ec; i++) {
    console.log(matrix[sr][i]);
  }
  for (var j = sr + 1; j <= er; j++) {
    console.log(matrix[j][ec]);
  }
  for (var k = ec - 1; k >= sc; k--) {
    console.log(matrix[er][k]);
  }
  for (var l = er - 1; l > sr; l-- ) {
    console.log(matrix[l][sc]);
  }
    sr++
    sc++
    er--
    ec--
    spiral(matrix, sr, sc, er, ec);
  }
}

spiral(arr, 0, 0, arr.length - 1, arr.length - 1);
