const exCards = []
for (var i = 0; i < 52; i++) {
  exCards.push(i + 1)
}

function shuffle(cards, result = []) {
  if (cards.length === 0) return result
  const currRand = getRandNum(cards)
  const pickedCard = cards.splice(currRand, 1)
  result.push(pickedCard[0])
  return shuffle(cards, result)
}

function getRandNum(arr) {
  return Math.floor(arr.length * Math.random())
}

console.log(shuffle(exCards))

function getRandBook(lower, higher) {
  return lower + Math.floor(Math.random() * (lower - higher + 1))
}

function shuffleBook(cards, total = 51) {
  if (total === 0) return cards
  shuffleBook(cards, i - 1)
  const randNum = getRandBook(0, i)
  const temp = cards[randNum]
  cards[randNum] = cards[i]
  cards[i] = temp
  return cards
}

function shuffleBookIterative(cards) {
  for (var i = 0; i < cards.length; i++) {
    const randNum = getRandBook(0, i)
    const temp = cards[randNum]
    cards[randNum] = cards[i]
    cards[i] = temp
  }
  return cards
}
