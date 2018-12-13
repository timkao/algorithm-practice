function count2s(num) {
  const pow = findPower(num)
  let result = 0
  const powerTable = {'0': 1}
  return calculate(num, pow, result, powerTable)
}

function calculate(num, power, result, table) {
  if (num < 10) {
    if (num >= 2) {
      result += 1
    }
    return result
  }
  const highestDigit = Math.floor(num / Math.pow(10, power))
  const rest = num % Math.pow(10, power)
  if (highestDigit === 2) {
    result += rest + 1
    result += powerMap(power - 1, table) * highestDigit
  } else if (highestDigit < 2) {
    result += powerMap(power - 1, table)
  } else {
    result += powerMap(power - 1) * highestDigit
    result += Math.pow(10, power)
  }
  return calculate(rest, power - 1, result)
}

function powerMap(power, table = {'0': 1}) {
  if (table[power] !== undefined) return table[power]
  table[power] = powerMap(power - 1, table) * 10 + Math.pow(10, power)
  return table[power]
}

function findPower(num) {
  let result = 0
  while (num >= 10) {
    result += 1
    num = num / 10
  }
  return result
}


console.log(count2s(22))
