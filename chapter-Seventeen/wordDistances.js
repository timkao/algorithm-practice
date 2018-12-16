function wordDistance(str, targetA, targetB) {
  const wordArr = str.split(' ')
  const table = {}
  for (var i = 0; i < wordArr.length; i++) {
    const word = wordArr[i]
    if (table[word] === undefined) {
      table[word] = [i]
    } else {
      table[word].push(i)
    }
  }
  const arrA = table[targetA]
  const arrB = table[targetB]
  return findShortestDiff(arrA, arrB)
}

function findShortestDiff(arr1, arr2) {
  let result = Number.MAX_VALUE
  let pointer1 = 0
  let pointer2 = 0
  while (pointer1 < arr1.length || pointer2 < arr2.length) {
    const num1 = arr1[pointer1]
    const num2 = arr2[pointer2]
    const diff = num1 - num2
    if (Math.abs(diff) < result) {
      result = Math.abs(diff)
    }
    if (diff > 0) {
      if (pointer2 === arr2.length - 1) break
      pointer2 += 1
    }
    if (diff < 0) {
      if (pointer1 === arr1.length - 1) break
      pointer1 += 1
    }
  }
  return result
}

const ex1 = [3, 7, 17, 20]
const ex2 = [10, 11, 19]
console.log(findShortestDiff(ex1, ex2))
