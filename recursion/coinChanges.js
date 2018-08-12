function coinChange(total, coinValues, pointer = 0) {
  if (total < 0) {
    return 0
  }
  if (total === 0) {
    return 1
  }
  if (pointer === coinValues.length && total > 0) {
    return 0
  }
  return coinChange(total - coinValues[pointer], coinValues, pointer) + coinChange(total, coinValues, pointer + 1);
}

function findCombs(total, coinValues, pointer = 0, result = [], comb = []) {
  if (total < 0) {
    return result
  }
  if (total === 0) {
    result.push(comb);
    return result;
  }
  if (pointer === coinValues.length && total > 0) {
    return result
  }

  const aggregateComb = comb.concat([coinValues[pointer]]);
  findCombs(total - coinValues[pointer], coinValues, pointer, result, aggregateComb)
  const revertComb = aggregateComb.slice(0, aggregateComb.length - 1);  //  使用mutable data 要小心，unmutable 比較不會出問題
  findCombs(total, coinValues, pointer + 1, result, revertComb);

  return result;

}

console.log(coinChange(5, [1, 2, 3]));
console.log(findCombs(5, [1, 2, 3]));
