/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]
  let result = [1, 1]
  while (rowIndex > 1) {
      const temp = [1]
      for (var i = 0; i < result.length - 1; i++) {
        temp.push(result[i] + result[i + 1])
      }
      temp.push(1)
      rowIndex -= 1
      result = temp
  }
  return result
};
