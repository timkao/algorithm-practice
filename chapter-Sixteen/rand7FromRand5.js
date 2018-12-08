const rand5 = function() {
  return Math.floor(Math.random() * 5)
}

const rand7 = function() {
  while (true) {
    const testNum = 5 * rand5() + rand5()
    if (testNum < 21) {
      return testNum % 7
    }
  }
}

for (var i = 0; i < 20; i++) {
  console.log(rand7())
}
