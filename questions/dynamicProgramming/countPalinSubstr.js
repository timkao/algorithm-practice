/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s, start = 0, visited = {}) {
  let result = 0
  if (visited[`${start}-${s.length}`] !== undefined) return 0
  for (var i = start; i < s.length; i++) {
      const subStr = s.slice(start, i + 1)
      const key = `${start}-${i + 1}`
      if (visited[key] === undefined) {
          if (isPalin(subStr)) {
              visited[key] = 1 + countSubstrings(s, i + 1, visited)
          } else {
              visited[key] = countSubstrings(s, i + 1, visited)
          }
          result += visited[key]
      } else {
          result += visited[key]
      }
  }
  visited[`${start}-${s.length}`] = result
  return result
};

function isPalin(str) {
  let start = 0
  let end = str.length - 1
  while (start < end) {
      if (str[start] !== str[end]) return false
      start += 1
      end -= 1
  }
  return true
}
