var assert = require('assert')

function Box(width, depth, height) {
  this.width = width
  this.height = height
  this.depth = depth
}

const boxOne = new Box(5, 4, 5)
const boxTwo = new Box(2, 1, 2)
const boxThree = new Box(3, 3, 3)
const boxFour = new Box(3, 2, 4)

const exampleArr = [boxOne, boxTwo, boxThree, boxFour]

function stackOfBoxes(boxesArr) {
  const resultBoxes = []
  const candidates = boxesArr.slice(0)
  return constructResult(resultBoxes, candidates)
}

function constructResult(resultBoxes, candidates) {
  if (candidates.length === 0) {
    return calculateTotalHeight(resultBoxes)
  }
  let result = 0
  for (var i = 0; i < candidates.length; i++) {
    const selectedBox = candidates[i]
    const newCandidates = constructCandidates(selectedBox, candidates)

    resultBoxes.push(selectedBox)
    result = Math.max(constructResult(resultBoxes, newCandidates), result)
    resultBoxes.pop()
  }
  return result
}

function calculateTotalHeight(arr) {
  return arr.reduce((aggr, box) => aggr + box.height, 0)
}

function constructCandidates(currBox, boxArr) {
  return boxArr.filter(box => {
    return (box.height > currBox.height && box.width > currBox.width && box.depth > currBox.depth)
  })
}

assert.equal(stackOfBoxes(exampleArr), 11)
