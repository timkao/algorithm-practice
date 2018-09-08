function findTwoPoint(arr, begin = 0, most = [0, 1]) {

  if (begin >= arr.length - 2) {
    return most
  }

  const currPoint = arr[begin]
  const currSlopes = []
  for (var i = begin + 1; i < arr.length; i++) {
    currSlopes.push(findSlope(currPoint, arr[i]))
  }
  const currMost = countMost(currSlopes, begin);
  if (currMost.length > most.length) {
    return findTwoPoint(arr, begin + 1, currMost)
  }
  return findTwoPoint(arr, begin + 1, most)

}


function findLine(arr) {
  const points = findTwoPoint(arr)
  return buildLine(points[0], points[1])
}
