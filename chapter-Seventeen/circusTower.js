const example = [
  {weight: 10, height: 13},
  {weight: 11, height: 15},
  {weight: 20, height: 9},
  {weight: 15, height: 20},
  {weight: 17, height: 17},
  {weight: 16, height: 16}
];


function circusTower(arr) {
  arr.sort((a, b) => b.weight - a.weight)
  return findCircusTower2(arr)
}

function findCircusTower(arr, height = Number.MAX_VALUE, count = 0) {
  if (arr.length === 0) return count
  let maxCount = 0;
  for (var i = 0; i < arr.length; i++) {
    const person = arr[i]
    if (person.height < height) {
      const nextArr = arr.slice(i + 1, arr.length)
      maxCount = Math.max(maxCount, findCircusTower(nextArr, person.height, count + 1))
    }
  }
  return maxCount;
}
console.log(circusTower(example))

function findCircusTower2(arr) {
  const solutions = []
  for (var i = 0; i < arr.length; i++) {
    const currNum = arr[i].height
    solutions[i] = [currNum]
    for (var j = 0; j < solutions.length; j++) {
      const currSolution = solutions[j]
      if (currSolution[currSolution.length - 1] > currNum) {
        currSolution.push(currNum)
      }
    }
  }
  return Math.max(...solutions.map(sol => sol.length))
}
