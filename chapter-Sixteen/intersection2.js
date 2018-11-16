function checkIntersection(point1Start, point1End, point2Start, point2End) {
  const formulaOne = findFormula(point1Start, point1End)
  const formulaTwo = findFormula(point2Start, point2End)

  if (formulaOne[0] === formulaTwo[0] && formulaOne[1] === formulaTwo[1]) {
    if (formulaOne[0] === Number.POSITIVE_INFINITY) {
      return !((point2Start[0] < point1Start[0] && point2Start[0] < point1End[0] && point2End[0] < point1Start[0] && point2End[0] < point1End[0]) ||
      (point2Start[0] > point1Start[0] && point2Start[0] > point1End[0] && point2End[0] > point1Start[0] && point2End[0] > point1End[0]))
    }
    return !((point2Start[1] < point1Start[1] && point2Start[1] < point1End[1] && point2End[1] < point1Start[1] && point2End[1] < point1End[1]) ||
      (point2Start[1] > point1Start[1] && point2Start[1] > point1End[1] && point2End[1] > point1Start[1] && point2End[1] > point1End[1]))
  } else if (formulaOne[0] === formulaTwo[0]) {
    return false
  } else {
    const intersection = findIntersection(formulaOne, formulaTwo)
    if (formulaOne[0] === Number.POSITIVE_INFINITY || formulaTwo[0] === Number.POSITIVE_INFINITY) {
      return !((intersection[0] < point1Start[0] && intersection[0] < point1End[0]) ||
      (intersection[0] > point1Start[0] && intersection[0] > point1End[0]))
    }
    return !((intersection[1] < point1Start[1] && intersection[1] < point1End[1]) ||
    (intersection[1] > point1Start[1] && intersection[1] > point1End[1]))
  }

}

function findFormula(pointA, pointB) {
  const xDiff = pointA[1] - pointB[1]
  const yDiff = pointA[0] - pointB[0]
  let slope, constant
  if (xDiff === 0) {
    slope = Number.POSITIVE_INFINITY
  } else {
    slope = yDiff / xDiff
  }
  if (slope === Number.POSITIVE_INFINITY) {
    constant = pointA[1]
  } else {
    constant = pointA[0] - slope * pointA[1]
  }
  return [slope, constant]
}

function findIntersection(fOne, fTwo) {
  let xPosition, yPosition
  if (fOne[0] === Number.POSITIVE_INFINITY) {
    xPosition = fOne[1]
    yPosition = fTwo[0] * xPosition + fTwo[1]
  } else if (fTwo[0] === Number.POSITIVE_INFINITY) {
    xPosition = fTwo[1]
    yPosition = fOne[0] * xPosition + fOne[1]
  } else {
    xPosition = (fOne[1] - fTwo[1]) / (fTwo[0] - fOne[0])
    yPosition = fTwo[0] * xPosition + fTwo[1]
  }
  return [yPosition, xPosition]
}

console.log(findIntersection([0, 2], [3, -1]))
console.log(findFormula([10, 1], [10, 2]))
