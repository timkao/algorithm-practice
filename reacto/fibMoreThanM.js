function fib(num, memo = []) {
  if (num === 0 || num === 1) { return 1}
  if (memo[num] !== undefined) { return memo[num] }

  memo[num] = fib(num - 1) + fib(num - 2);
  return memo[num];
}

function fibMoreThanM(target) {
  let result = 0;
  let start = 2;
  while (result < target) {
    result += fib(start)
    start += 3;
  }
  return [result, start - 3];
}

console.log(fibMoreThanM(1000000))
