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

function isBreakable(str, wordTable, start = 0, memo = {}) {
  if (wordTable[str]) return true
  if (start === str.length) return true
  if (memo[start] !== undefined) return memo[start]
  let prefix = ''
  for (let i = start; i < str.length; i++) {
      prefix += str[i]
      if (wordTable[prefix]) {
          const temp = isBreakable(str, wordTable, i + 1, memo)
          if (temp) {
              memo[start] = true
              return memo[start]
          }
      }
  }
  memo[start] = false
  return memo[start]
}

console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa']))
console.log(wordBreak('leetcode', ['leet', 'code']))
