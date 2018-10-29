function wordWrap (sentenceArr, lineWidth, result = '', sentencePointer = 0, count = 0) {
  if (sentencePointer === sentenceArr.length) {
    return result;
  }
  const currSentence = sentenceArr[sentencePointer]
  for (let i = 0; i < currSentence.length; i++) {
    result += currSentence[i]
    count++
    if (count === lineWidth) {
      result += '\n'
      count = 0
    }
  }
  return wordWrap(sentenceArr, lineWidth, result, sentencePointer + 1, count)
}

console.log(wordWrap(['012345678X', '01@345X', '0123X', '01234567890abcdefgh'], 6))
console.log(wordWrap(['012', '01', '0123X', '01234567890abcdefgh'], 6))

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
