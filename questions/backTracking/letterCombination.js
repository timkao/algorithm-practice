/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return []
  const map = [
      [''],
      [''],
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
      ['j', 'k', 'l'],
      ['m', 'n', 'o'],
      ['p', 'q', 'r', 's'],
      ['t', 'u', 'v'],
      ['w', 'x', 'y', 'z']
  ]
  return generateLetters(digits, map, '', [], 0)
};

function generateLetters(digits, map, acc, result, pointer) {
  if (acc.length === digits.length) {
      result.push(acc)
      return
  }
  const candidates = map[Number(digits[pointer])]
  for (let i = 0; i < candidates.length; i++) {
      generateLetters(digits, map, acc + candidates[i], result, pointer + 1)
  }
  return result
}
