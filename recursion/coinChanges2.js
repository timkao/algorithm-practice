var assert = require('assert')

function changes(num, coins) {
  if (num === 0) return 1
  if (num < 0) return 0
  if (coins.length === 0) return 0
  return changes(num - coins[0], coins) + changes(num, coins.slice(1))
}

assert.equal(changes(12, [2, 3, 5]), 5)
assert.equal(changes(5, [1, 2, 3]), 5)
assert.equal(changes(25, [1, 5, 10, 25]), 13)

function changesCombs(num, coins, result = [], temp = []) {
  if (num === 0) {
    result.push(temp)
    return
  }
  if (num < 0) return
  if (coins.length === 0) return
  changesCombs(num - coins[0], coins, result, temp.concat([coins[0]]))
  changesCombs(num, coins.slice(1), result, temp)
  return result
}

console.log(changesCombs(28, [1, 2, 3, 5]))

const onHands = {
  1: 3,
  2: 7,
  3: 2,
  5: 2,
}

function noCoins(obj) {
  let result = true
  Object.keys(obj).forEach(coin => {
    if (obj[coin] > 0) {
      result = false
    }
  })
  return result
}

function chooseCoin(obj) {
  const coinTypes = Object.keys(obj)
  for (var i = 0; i < coinTypes.length; i++) {
    if (obj[coinTypes[i]] !== 0) {
      obj[coinTypes[i]] -= 1
      return coinTypes[i]
    }
  }
}

function copyCoins(obj, num) {
  const result = {}
  Object.keys(obj).forEach(coinType => {
    result[coinType] = obj[coinType]
  })
  result[num] = 0
  return result
}

function changesCombsWithLimitation(num, coins, result = [], temp = []) {
  if (num === 0) {
    result.push(temp)
    return
  }
  if (num < 0) return
  if (noCoins(coins)) return
  const chosenCoin = chooseCoin(coins)
  const newCoins = copyCoins(coins, chosenCoin)
  newCoins[chosenCoin] = 0
  changesCombsWithLimitation(num - chosenCoin, coins, result, temp.concat([chosenCoin]))
  changesCombsWithLimitation(num, newCoins, result, temp)
  return result
}

console.log(changesCombsWithLimitation(28, onHands))
