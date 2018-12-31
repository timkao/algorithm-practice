const ex1 = {
  13: [14, 15, 100, 9, 5],
  16: [32, 1, 9, 3, 5],
  19: [15, 29, 2, 6, 8, 7],
  24: [7, 10],
}

function sparseSimilarity(doc) {
  const sortedById = Object.keys(doc).sort((a, b) => a - b)
  const overlapMap = {}
  sortedById.forEach(key => {
    const numsArr = doc[key]
    numsArr.forEach(num => {
      if (overlapMap[num] === undefined) {
        overlapMap[num] = [key]
      } else {
        overlapMap[num].push(key)
      }
    })
  })
  const overlapKeys = Object.keys(overlapMap).filter(key => overlapMap[key].length >= 2)
  const uIMap = generateUIMap(overlapMap, overlapKeys, doc)
  return generateSimilarity(uIMap)
}

function generateUIMap(map, keys, doc) {
  const result = {}
  keys.forEach(key => {
    const numArr = map[key]
    for (var i = 0; i < numArr.length - 1; i++) {
      for (var j = i + 1; j < numArr.length; j++) {
        const num1 = numArr[i]
        const num2 = numArr[j]
        const newKey = `${num1}, ${num2}`
        if (result[newKey] === undefined) {
          result[newKey] = [doc[num1].length + doc[num2].length, 1]
        } else {
          result[newKey][1] += 1
        }
      }
    }
  })
  return result
}

function generateSimilarity(map) {
  Object.keys(map).forEach(key => {
    const intersection = map[key][1]
    const union = map[key][0] - intersection
    map[key] = intersection / union
  })
  return map
}

console.log(sparseSimilarity(ex1))

