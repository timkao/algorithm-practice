/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const result = []
  const map = {}
  strs.forEach(str => {
      const key = str.split('').sort((a, b) => a > b).join('')
      if (map[key] === undefined) {
          map[key] = [str]
      } else {
          map[key].push(str)
      }
  })
  Object.keys(map).forEach(strKey => {
      result.push(map[strKey])
  })
  return result
};
