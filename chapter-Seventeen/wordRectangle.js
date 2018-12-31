function wordRectangle(words) {
  words.sort((a, b) => b.length - a.length)
  const triesObj = generateTriesObj(words)
  const wordsByLength = generateWordsObject(words)
  let result = 0
  for (var i = 0; i < words.length; i++) {
    const currWord = words[i]
    const currMaxLength = currWord.length
    if (result >= currMaxLength * currMaxLength ) {
      break
    }
    const newRect = findRect(currWord, currMaxLength, triesObj, wordsByLength)
    if (newRect > result) {
      result = newRect
    }
  }
  return result
}

function findRect(word, maxLength, tries, wordsObj) {
  while (maxLength > 0) {
    const rowCandidates = wordsObj[maxLength][word[0]]
    for (var i = 0; i < rowCandidates.length; i++) {
      const basicInfo = {
        candidate: rowCandidates[i], word, maxLength
      }
      const foundRect = verifyRect(basicInfo, tries, wordsObj, [word])
      if (foundRect !== false) {
        return foundRect
      }
    }
    maxLength -= 1
  }
  return 0
}

function verifyRect(info, tries, wordsObj, candidatePt = 1, resultArr) {
  const {candidate, maxLength, word} = info
  if (resultArr.length === candidate.length) return resultArr.length * resultArr[0].length
  const subCandidates = wordsObj[maxLength][candidate[candidatePt]]
  for (var i = 0; i < subCandidates.length; i++) {
    let temp = false
    if (isValidCandidate(subCandidates[i], resultArr, tries, word)) {
      temp = verifyRect(candidate, word, maxLength, tries, wordsObj, candidatePt + 1, resultArr.concat([subCandidates[i]]))
    }
    if (temp !== false) {
      return temp
    }
  }
  return false
}
