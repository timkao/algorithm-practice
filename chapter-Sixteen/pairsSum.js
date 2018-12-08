function pairSum(nums, value) {
  const table = {}
  const resultTable = {}
  nums.forEach(num => {
    if (table[num] === undefined) {
      table[num] = 1
    } else {
      table[num] += 1
    }
  })
  for (var i = 0; i < nums.length; i++) {
    const currNums = nums[i]
    const target = value - nums[i]
    const currCombo = currNums <= target ? `${currNums}_${target}` : `${target}_${currNums}`
    if (table[target] !== undefined && resultTable[currCombo] !== true) {
      resultTable[currCombo] = true
    }
  }
  return Object.keys(resultTable).map(key => {
    const idxStrArr = key.split('_')
    return [Number(idxStrArr[0]), Number(idxStrArr[1])]
  })
}

console.log(pairSum([6, 4, 1, 8, 5, 5, 5, 9, 2, 2, 3, 3, 8, 7], 10))
