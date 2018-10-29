function wordWrap (sentenceArr, lineWidth, result = [], sentencePointer = 0, temp = '') {
  if (sentencePointer === sentenceArr.length) {
    if (temp.length !== 0) {
      result.push(temp)
    }
    return result;
  }
  const currSentence = sentenceArr[sentencePointer]
  for (let i = 0; i < currSentence.length; i++) {
    temp += currSentence[i]
    if (temp.length === lineWidth) {
      result.push(temp)
      temp = ''
    }
  }
  return wordWrap(sentenceArr, lineWidth, result, sentencePointer + 1, temp)
}

console.log(wordWrap(['012345678X', '01@345X', '0123X', '01234567890abcdefgh'], 5))
console.log(wordWrap(['012', '01', '0123X', '01234567890abcdefgh'], 5))

function wordWrapWithLoop(arr, width) {
  let result = [];
  let temp = '';
  for (var i = 0; i < arr.length; i++) {
    const currStr = arr[i]
    for (var j = 0; j < currStr.length; j++) {
      temp += currStr[j]
      if (temp.length === width) {
        result.push(temp)
        temp = ''
      }
    }
    if (i === arr.length - 1 && temp.length !== 0) {
      result.push(temp)
    }
  }
  return result
}

console.log(wordWrapWithLoop(['012345678X', '01@345X', '0123X', '01234567890abcdefgh'], 10))
console.log(wordWrapWithLoop(['012', '01', '0123X', '01234567890abcdefgh'], 10))
