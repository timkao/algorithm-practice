function findMiddle(point, width) {
  return [point[0] + width / 2, point[1] + width / 2]
}

function findLine(pA, pB) {
  const slope = (pA[0] - pB[0]) / (pA[1] - pB[1]);
  const constantC = pA[1] - slope * pA[0]
  return function(xValue) {
    return slope * xValue + constantC;
  }
}

function cutSquares(pointA, widthA, pointB, widthB) {
  const middleA = findMiddle(pointA, widthA);
  const middleB = findMiddle(pointB, widthB);
  return findLine(middleA, middleB)
}

const line = cutSquares([1, 3], 2, [5, 5], 10)

console.log(line(2))
