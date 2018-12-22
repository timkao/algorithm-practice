const exStr = 'siamatestcasepleasesolveittoday'
const exDict = ['I', 'test', 'case', 'solve', 'it', 'am', 'please']
const finalSrtArr = []

function reSpace(str, dict) {
  const dictTable = createTable(dict)
  return findUnrecognized(str, dictTable)
}

function findUnrecognized(str, tableDict, start = 0, memo = []) {
  if (start > str.length - 1) return 0
  if (memo[start] !== undefined) return memo[start]
  let result = Number.MAX_VALUE
  let partial = ''
  for (let i = start + 1; i <= str.length; i++) {
    const prepareForRecog = str.slice(start, i)
    const currUnRecog = recognizing(prepareForRecog, tableDict)
    if (currUnRecog < result) { // 如果當前無法辨識的數量就已經比較多了，就不需要繼續
      const nextUnRecog = findUnrecognized(str, tableDict, i, memo)
      if (result > currUnRecog + nextUnRecog) {
        result = currUnRecog + nextUnRecog
        cutPos = prepareForRecog
        if (result === 0) break // 零是最小值，若已經為零，則無需繼續
      }
    }
  }
  finalSrtArr.push(cutPos)
  memo[start] = result
  return memo[start]
}

function recognizing(word, dictTable) {
  if (dictTable[word] === true) return 0
  return word.length
}

function createTable(dictArr) {
  const result = {}
  dictArr.forEach(word => {
    const newWord = word.toLowerCase()
    if (result[newWord] === undefined) {
      result[newWord] = true
    }
  })
  return result
}

console.log(reSpace(exStr, exDict))

let result = ''
for (var i = finalSrtArr.length - 1; i >= 0; i--) {
  const currWord = finalSrtArr[i]
  if (currWord.length === 1) {
    result += currWord + ' '
  } else {
    result += currWord + ' '
    i -= (currWord.length - 1)
  }
}
console.log(result)
