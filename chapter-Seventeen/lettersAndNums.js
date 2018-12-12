const example = [1, 'a', 'a', 'a', 1, 1]

function lettersAndNums(arr) {
  const diffArr = []
  const table = {'0': [-1]}
  let numCount = 0
  let letterCount = 0
  for (var i = 0; i < arr.length; i++) {
    const currEle = arr[i]
    if (typeof currEle === 'string') {
      letterCount += 1
    } else if (typeof currEle === 'number') {
      numCount += 1
    }
    diffArr[i] = letterCount - numCount
  }

  for (var j = 0; j < diffArr.length; j++) {
    const currDiff = diffArr[j]
    if (table[currDiff] === undefined) {
      table[currDiff] = [j]
    } else {
      table[currDiff][1] = j
    }
  }

  return table
}

console.log(lettersAndNums(example))
