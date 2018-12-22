function pickMNums(m, arr) {
  const subSet = []
  for (var i = 0; i < m; i++) {
    subSet[i] = arr[i]
  }

  for (var j = m; j < arr.length; j++) {
    const randNum = Math.floor(Math.random() * j)
    if (randNum < m) {
      subSet[randNum] = arr[j]
    }
  }
  return subSet
}

/*
  m = 3
  j = 3 -> 4 -> 5
  randNum = 0 - 3, 0 - 4, 0 - 5
*/
