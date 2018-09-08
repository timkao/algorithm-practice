const examples = [
  [0, 1],
  [2, 2],
  [3, 6],
  [-1, -1],
  [1, 1],
  [4, 4],
]


function findLines(arr, begin = 0, aggr = {}) {
  if (arr.length - begin <= 1) {
    return aggr
  }

  const currPoint = arr[begin];
  for (var i = begin + 1; i < arr.length; i++) {
    const anotherPoint = arr[i]
    const slope = findSlope(currPoint, anotherPoint);
    const diff = findDiff(currPoint, slope);
    const key = `${slope}&${diff}`;
    if (aggr[key]) {
      aggr[key] += 1
    } else {
      aggr[key] = 1
    }
  }
  return findLines(arr, begin + 1, aggr);
}

function findSlope(pointA, pointB) {
  return (pointA[1] - pointB[1]) / (pointA[0] - pointB[0]);
}

function findDiff(point, slope) {
  return point[1] - slope * point[0];
}

console.log(findLines(examples));
