function largestCycle(begin, end) {
  let result = 0;
  for (var i = begin; i < end + 1; i++) {
    const current = cycle(i);
    if (current > result) {
      result = current
    }
  }
  return result;
}

function cycle(num) {
  if (num === 1) {
    return 1;
  }
  if (num % 2 === 0) {
    return 1 + cycle(num / 2);
  }
  if (num % 2 !== 0) {
    return 1 + cycle(num * 3 + 1)
  }
}

console.log(largestCycle(1, 10))
console.log(largestCycle(100, 200))
console.log(largestCycle(201, 210))
console.log(largestCycle(900, 1000))
