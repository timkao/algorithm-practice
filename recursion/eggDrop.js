// two eggs
function eggDrop(stairs, table = []) {
  if (stairs === 0) {
    return 0
  }

  const numbers = []
  for (var i = 1; i < stairs + 1; i++) {   // 1 <= i <= n
    if (table[stairs - i] !== undefined) {
      numbers.push(Math.max(i - 1 + 1, table[stairs - i])) // 窮舉所有可能性，每一層都取最大值
    } else {
      table[stairs - i] = eggDrop(stairs - i, table) + 1; // 使用記憶體減少重複計算，加快速度
      numbers.push(Math.max(i - 1 + 1, table[stairs - i]))
    }
  }
  return Math.min(...numbers); // 取所有可能性的最小值
}

console.log(eggDrop(100));
