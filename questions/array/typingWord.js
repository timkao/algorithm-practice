var wordsTyping = function(sentence, rows, cols) {
  const senStr = sentence.join(' ')
  const totalLen = senStr.length
  if (totalLen === cols) return rows
  if (totalLen > cols) return lenMoreCal(senStr, rows, cols, sentence)
  return colMoreCal(senStr, rows, cols)
};

function lenMoreCal(str, rows, cols, arr) {
  const dp = []
  for (let i = 0; i < cols; i++) {
      dp[i] = lenMoreDp(str, cols, i, arr) // [nums of row needed, ending position]
  }
  console.log(dp)
  let beginPos = 0
  let result = 0
  while (rows > 0) {
      rows -= dp[beginPos][0]
      if (rows <= 0) return result
      beginPos = dp[beginPos][1]
      result += 1
  }
  return result
}

function lenMoreDp(str, cols, start, arr) {
  let availSpace = cols - start
  let rows = 0
  for (let i = 0; i < arr.length; i++) {
      const currLen = arr[i].length
      if (currLen === availSpace) {
          rows += 1
          availSpace = cols
          continue
      }
      if (currLen > availSpace) {

      }
      if (currLen < availSpace) {

      }
  }
  return [rows, cols - availSpace]
}

function colMoreCal(str, rows, cols) {
  const dp = []
  for (let i = 1; i < str.length; i++) {
      dp[i] = positionInNextRow(str, i)
  }
  let result = 0
  let preOccupied = 0
  while (rows > 0) {
      result += Math.floor((cols - preOccupied) / str.length)
      rows -= 1
      if (rows <= 0) return result
      result += 1
      if ((cols - preOccupied) % str.length === 0) {
        preOccupied = 0
        rows -= 1
      } else {
        preOccupied = dp[(cols - preOccupied) % str.length]
      }
  }
  return result
}

function positionInNextRow(str, idx) {
  if (str[idx - 1] === ' ') return str.length - idx + 1
  if (str[idx] === ' ') return str.length - idx
  let prevSpace = idx - 1
  while (str[prevSpace] !== ' ') {
      prevSpace -= 1
      if (prevSpace === 0) return str.length
  }
  return str.length - prevSpace + 1
}

// console.log(wordsTyping(["a", "bcd", "e"], 3, 6))
// console.log(wordsTyping(["I", "had", "apple", "pie"], 4, 5))
// console.log(wordsTyping(["ab","cde","f"], 3, 5))
// console.log(wordsTyping(["f","p","a"], 8, 7))
console.log(wordsTyping(["a", "bcd", "e"], 4, 6))
