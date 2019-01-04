/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let leftMin = Number.POSITIVE_INFINITY
  let rightMax = Number.NEGATIVE_INFINITY
  let result = 0

  const leftMinArr = []
  const rightMaxArr = []
  for (var i = 0; i < prices.length; i++) {
      const currPrice = prices[i]
      if (currPrice < leftMin) {
          leftMin = currPrice
      }
      leftMinArr[i] = leftMin
  }
  for (var j = prices.length - 1; j >= 0; j--) {
      const currPrice2 = prices[j]
      if (currPrice2 > rightMax) {
          rightMax = currPrice2
      }
      rightMaxArr[j] = rightMax
  }
  console.log(leftMinArr)
  console.log(rightMaxArr)
  for (var k = 0; k < prices.length; k++) {
      const diff = Math.abs(leftMinArr[k] - rightMaxArr[k])
      if (diff > result) {
          result = diff
      }
  }
  return result

};
