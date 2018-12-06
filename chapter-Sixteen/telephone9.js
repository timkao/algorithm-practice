function telephone9(nums) {
  const result = []
  const mapping = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ]
  findWords(nums, mapping, result)
  return result
}

function findWords(nums, mapping, result, prefix = '') {
  if (nums.length === 0) {
    result.push(prefix)
    return
  }
  const currChars = mapping[nums[0]]
  for (var i = 0; i < currChars.length; i++) {
    const currChar = currChars[i]
    if (searchTrie(currChar, prefix)) {
      prefix += currChar
      findWords(nums.slice(1, nums.length), mapping, result, prefix)
    }
  }
}

