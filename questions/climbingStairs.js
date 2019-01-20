var climbStairs = function(n) {
  const table = {1 : 1, 0: 1}
  for (var i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2]
  }
  return table[n]
};
