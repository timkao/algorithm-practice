/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S, pointer = 0, result = [], acc = '') {
  if (pointer > S.length) return result
  if (acc.length === S.length) {
      result.push(acc)
      return result
  }
  const currLetter = S[pointer]
  if (!currLetter.match("^[a-zA-Z\(\)]+$")) {
      letterCasePermutation(S, pointer + 1, result, acc + currLetter)
  } else {
      letterCasePermutation(S, pointer + 1, result, acc + currLetter.toLowerCase())
      letterCasePermutation(S, pointer + 1, result, acc + currLetter.toUpperCase())
  }
  return result
};
