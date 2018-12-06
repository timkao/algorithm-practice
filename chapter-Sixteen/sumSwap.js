function sumSwap(numsA, numsB) {
  const sumA = numsA.reduce((acc, num) => acc + num, 0)
  const sumB = numsB.reduce((acc, num) => acc + num, 0)
  if (sumA === sumB) return null
  const diff = Math.abs(sumA - sumB) / 2
  if (diff % 2 !== 0) return null

  if (sumA > sumB) return findSwap(numsA, numsB, diff)
  return findSwap(numsB, numsA, diff)
}

function findSwap(bigNums, smallNums, dif) {
  const bigTable = {}
  bigNums.forEach(num => {
    if (bigTable[num] === undefined) {
      bigTable[num] = true
    }
  })
  for (var i = 0; i < smallNums.length; i++) {
    const target = smallNums[i] + dif
    if (bigTable[target]) return [smallNums[i], target]
  }
  return null
}

function findSwap2(bigNums, smallNums, dif) {
  const sortedBigNums = bigNums.sort((a, b) => a - b)
  const sortedSmallNums = smallNums.sort((a, b) => a - b)

  let bigPointer = 0
  let smallPointer = 0
  while (bigPointer < sortedBigNums.length && smallPointer < sortedSmallNums.length) {
    const currDiff = sortedBigNums[bigPointer] - sortedSmallNums[smallPointer]
    if (currDiff === dif) return [sortedBigNums[bigPointer], sortedSmallNums[smallPointer]]
    if (currDiff < dif) {
      bigPointer += 1
    } else {
      smallPointer += 1
    }
  }
}


console.log(sumSwap([4, 1, 2, 1, 1, 2], [3, 6, 3, 3]))

