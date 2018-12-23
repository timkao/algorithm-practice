const ex = ['abckiii', 'b', 'c', 'gdf', 'ebce', 'e', 'ce', 'fnhey']

function longestWord(words) {
  words.sort((a, b) => b.length - a.length)
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (isOfOtherWords(word, words, i)) {
      return word
    }
  }
  return null
}

function isOfOtherWords(testWord, arr, arrIdx, memo = {}) {
  if (testWord.length === 0) return true
  if (memo[testWord] !== undefined) return memo[testWord]
  for (let i = arrIdx + 1; i < arr.length; i++) {
    const subWord = arr[i]
    if (subWord.length <= testWord.length && isPartial(testWord, subWord)) {
      return isOfOtherWords(testWord.slice(subWord.length), arr, arrIdx, memo)
    }
  }
  memo[testWord] = false
  return memo[testWord]
}

function isPartial(word, subWord) {
  for (var i = 0; i < subWord.length; i++) {
    if (subWord[i] !== word[i]) return false
  }
  return true
}

console.log(longestWord(ex))
