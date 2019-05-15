var ladderLength = function(beginWord, endWord, wordList) {
  const visited = {}
  let candidates = [beginWord]
  let nextCandidates = []
  let result = 1
  visited[beginWord] = true

  while (candidates.length !== 0) {
      const curNode = candidates.pop()

      if (curNode === endWord) return result

      for (let i = 0; i < wordList.length; i++) {
          const nextCand = wordList[i]
          if (visited[nextCand] === undefined && isValidNextStep(curNode, nextCand)) {
              visited[nextCand] = true

              nextCandidates.push(nextCand)
          }
      }

      if (candidates.length === 0) {
          candidates = nextCandidates
          nextCandidates = []
          result += 1
      }
  }
  return 0
};

function isValidNextStep(strA, strB) {
  let diff = 0
  for (let i = 0; i < strA.length; i++) {
      if (strA[i] !== strB[i]) {
          diff += 1
      }
      if (diff > 1) return false
  }
  return true
}
