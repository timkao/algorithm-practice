// two eggs
function eggDrop(stairs, table = []) {
  if (stairs === 0) {
    return 0
  }

  const numbers = []
  for (var i = 1; i < stairs + 1; i++) {
    if (table[stairs - i] !== undefined) {
      numbers.push(Math.max(i - 1 + 1, table[stairs - i]))
    } else {
      table[stairs - i] = eggDrop(stairs - i, table) + 1;
      numbers.push(Math.max(i - 1 + 1, table[stairs - i]))
    }
  }
  return Math.min(...numbers);
}

console.log(eggDrop(100));
