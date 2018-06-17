function zeros(num) {
  if (num === 0) { return 1}
  const countTwoFive = {
    two: 0,
    five: 0
  }

  for (var i = 1; i <= num; i++) {
    let currValue = i
    while (currValue % 2 === 0) {
      countTwoFive.two++
      currValue = currValue / 2
    }
    while (currValue % 5 === 0) {
      countTwoFive.five++
      currValue = currValue / 5
    }
  }

  return Math.min(countTwoFive.two, countTwoFive.five)
}

console.log(zeros(5))

