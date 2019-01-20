/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  if (S === T) return true
  const [newS, lastS] = processTail(S)
  const [newT, lastT] = processTail(T)
  if (lastS !== lastT) return false
  return backspaceCompare(newS, newT)
};

function processTail(str) {
  let countDelete = 0
  for (var i = str.length - 1; i >= 0; i--) {
      if (str[i] === '#') {
          countDelete += 1
      } else {
          countDelete -= 1
      }
      if (countDelete === -1) {
          return [str.slice(0, i), str[i]]
      }
  }
  return ['', '']

}
