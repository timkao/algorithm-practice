var backspaceCompare = function(S, T) {
  const finalS = processStr(S)
  const finalT = processStr(T)
  return finalS === finalT
};

function processStr(str) {
  let result = []
  for (var i = 0; i < str.length; i++) {
      const curr = str[i]
      if (curr !== '#') {
          result.push(curr)
      } else {
          result.pop()
      }
  }
  return result.join('')
}
