var addBoldTag = function(s, dict) {
  const boolArr = []
  for (let i = 0; i < s.length; i++) {
      boolArr[i] = false
  }
  dict.forEach(word => {
      let beginIdx = 0
      let wordIdx = s.indexOf(word, beginIdx)
      while (wordIdx !== -1) {
          // update bool
          for (let j = 0; j < word.length; j++) {
              boolArr[wordIdx + j] = true
          }
          // update beginIdx
          beginIdx = wordIdx + 1

          // update wordIdx
          wordIdx = s.indexOf(word, beginIdx)
      }
  })
  let result = ''
  for (let k = 0; k < boolArr.length; k++) {
      if (boolArr[k]) {
          if (k === 0 || boolArr[k - 1] === false) {
              result += '<b>'
          }
          result += s[k]
          if (k === boolArr.length - 1 || boolArr[k + 1] === false) {
              result += '</b>'
          }
      } else {
          result += s[k]
      }
  }
  return result
};
