var assert = require('assert')

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

assert.equal(longestWord(ex), 'ebce')

// in the end my method should perform more or less the same as what the book has

function longestWordBook(words) {
  const wordsDict = createTable(words)
  words.sort((a, b) => b.length - a.length)
  for (var i = 0; i < words.length; i++) {
    const currWord = words[i]
    if (canBuildWord(currWord, true, wordsDict)) {
      return currWord
    }
  }
}

function createTable(arr) {
  const result = {}
  arr.forEach(word => {
    if (result[word] === undefined) {
      result[word] = true
    }
  })
  return result
}

function canBuildWord(word, isOrigin, dict) {
  if (dict[word] === true && !isOrigin) return dict[word]
  for (var i = 0; i < word.length; i++) {
    const left = word.slice(0, i)
    const right = word.slice(i)
    if (dict[left] === true && canBuildWord(right, false, dict)) return true
  }
  dict[word] = false
  return dict[word]
}

assert.equal(longestWordBook(ex), 'ebce')


