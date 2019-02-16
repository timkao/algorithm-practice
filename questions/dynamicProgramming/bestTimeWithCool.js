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

var maxProfitDp = function(prices) {
  if (prices.length === 0) return 0
  const buy = [-prices[0]]
  const sell = [0]
  const rest = [0]
  for (let i = 1; i < prices.length; i++) {
    buy[i] = Math.max(rest[i - 1] - prices[i], buy[i - 1])
    sell[i] = Math.max(buy[i - 1] + prices[i], sell[i - 1])
    rest[i] = Math.max(sell[i - 1], buy[i - 1], rest[i - 1])
  }
  return sell[prices.length - 1]
};
