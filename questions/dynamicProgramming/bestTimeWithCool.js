/**
 * @param {number[]} prices
 * @return {number}
 */
const memo = []
const memo2 = []


var maxProfit = function(prices, start = 0, stock = null, sold = false) {
  if (start === prices.length) return 0
  if (sold === true) return maxProfit(prices, start + 1, stock, false)
  if (memo[start] !== undefined && stock === null) return memo[start]
  if (stock !== null && memo2[`${start}-${stock}`] !== undefined) return memo2[`${start}-${stock}`]
  if (stock === null) {
      const buyIt = maxProfit(prices, start + 1, prices[start], sold)
      const notBuyIt = maxProfit(prices, start + 1, stock, sold)
      memo[start] = Math.max(buyIt, notBuyIt)
      return memo[start]
  } else {
      const soldIt = prices[start] - stock + maxProfit(prices, start + 1, null, true)
      const notSoldIt = maxProfit(prices, start + 1, stock, sold)
      memo2[`${start}-${stock}`] = Math.max(soldIt, notSoldIt)
      return Math.max(soldIt, notSoldIt)
  }
};

console.log(maxProfit([2, 1, 4]))
console.log(memo)
console.log(memo2)

