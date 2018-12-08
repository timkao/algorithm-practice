const testValue = 'cacatgocatgo'
const testPatterns = 'aabab'

function twoPatternsMatch(value, patterns) {
  if (['a', 'ab', 'b'].includes(patterns)) return true
  const mathArr = patterns.split('a')
  for (var i = 1; i <= value.length; i++) {
    const firstPattern = value.slice(0, i)
    if (matchPattern(value, mathArr, firstPattern)) {
      return true
    }
  }
  return false
}

function matchPattern(value, matchArr, patternOne) {
  const patternArr = value.split(patternOne)
  let patternTwo
  for (var i = 0; i < matchArr.length; i++) {
    if (matchArr[i] === '' && patternArr[i] !== '') return false
    if (matchArr[i] === 'b' && patternArr[i] === '') return false
    if (matchArr[i] === 'b' && patternTwo === undefined) {
      patternTwo = patternArr[i]
    }
    if (matchArr[i] === 'b' && patternTwo !== patternArr[i]) return false
  }
  return true
}

console.log(twoPatternsMatch(testValue, testPatterns))

