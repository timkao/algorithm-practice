/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dictTable = generateTable(wordDict)
  return isBreakable(s, dictTable)
};

function generateTable(wordDict) {
  const result = {}
  wordDict.forEach(word => {
      if (result[word] === undefined) {
          result[word] = true
      }
  })
  return result
}

function isBreakable(str, wordTable) {
  if (wordTable[str] !== undefined) return wordTable[str]
  if (str.length === 0) return true
  let prefix = ''
  for (var i = 0; i < str.length; i++) {
      prefix += str[i]
      if (wordTable[prefix]) {
          const temp = isBreakable(str.slice(i + 1, str.length), wordTable)
          if (temp) {
              wordTable[str] = true
              return wordTable[str]
          }
      }
  }
  wordTable[str] = false
  return wordTable[str]
}
