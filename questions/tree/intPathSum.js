var pathSum = function(nums) {
  const heightsVal = [[], [], [], [], []]
  let result = 0
  nums.forEach(num => {
      const numStr = String(num)
      const height = numStr[0]
      const pos = numStr[1]
      const val = Number(numStr[2])
      heightsVal[height][pos] = val
  })
  for (let i = 0; i < nums.length; i++) {
      const curNum = nums[i]

      if (isLeaf(curNum)) {
          result += calSum(curNum)
      }
  }
  return result

  function isLeaf(num) {
      const numStr = String(num)
      const height = Number(numStr[0])
      const pos = Number(numStr[1])
      const childHeight = height + 1
      const childPos = [pos * 2 - 1, pos * 2]
      return heightsVal[childHeight] === undefined || (heightsVal[childHeight][childPos[0]] === undefined
          && heightsVal[childHeight][childPos[1]] === undefined)
  }

  function calSum(num) {
      const numStr = String(num)
      const height = Number(numStr[0])
      const pos = Number(numStr[1])
      const val = Number(numStr[2])

      let result = val
      let parentHeight = height - 1
      let parentPos = Math.ceil(pos / 2)
      while (heightsVal[parentHeight][parentPos] !== undefined) {
          result += heightsVal[parentHeight][parentPos]
          parentHeight -= 1
          parentPos = Math.ceil(parentPos / 2)
      }
      return result
  }

};
