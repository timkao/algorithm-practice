/*
  1. taipei,
  2. barcelona,
  3. new york,
  4. guangchou
  5. inca,
  6. union city
  7. haiphong
  -----------------------------
  const a1 = new edge(1, 2, 5)
  const a2 = new edge(1, 3, 7)
  const a3 = new edge(1, 4, 12)
  const a4 = new edge(2, 5, 7)
  const a5 = new edge(2, 3, 9)
  const a6 = new edge(3, 4, 4)
  const a7 = new edge(3, 5, 4)
  const a8 = new edge(3, 6, 3)
  const a9 = new edge(4, 6, 7)
  const a10 = new edge(5, 6, 2)
  const a11 = new edge(5, 7, 5)
  const a12 = new edge(6, 7, 2)
*/


const distances = [
  ['taipei', 'barcelona', 5],
  ['taipei', 'new_york', 7],
  ['taipei', 'guangchou', 12],
  ['barcelona', 'inca', 7],
  ['barcelona', 'new_york', 9],
  ['new_york', 'guangchou', 4],
  ['new_york', 'inca', 4],
  ['new_york', 'union_city', 3],
  ['guangchou', 'union_city', 7],
  ['inca', 'union_city', 2],
  ['inca', 'haiphong', 5],
  ['union_city', 'haiphong', 2]
]

// find the MST of all the cities

function findMST(dists) {
  dists.sort((a, b) => a[2] - b[2])
  const unionSet = initUnionSet(dists)
  const result = []
  for (let i = 0; i < dists.length; i++) {
    const city1 = dists[i][0]
    const city2 = dists[i][1]
    const root1 = findRoot(unionSet, city1)
    const root2 = findRoot(unionSet, city2)

    if (root1 === root2) continue
    if (unionSet.size[root1] >= unionSet.size[root2]) {
      unionSet.size[root1] = unionSet.size[root1] + unionSet.size[root2]
      unionSet.parent[root2] = root1
    } else {
      unionSet.size[root2] = unionSet.size[root1] + unionSet.size[root2]
      unionSet.parent[root1] = root2
    }
    result.push(dists[i])
  }
  return result
}

function findRoot(unionSet, city) {
  if (unionSet.parent[city] === city) return city
  return findRoot(unionSet, unionSet.parent[city])
}

function initUnionSet(dists) {
  const unionSet = {
    parent: {},
    size: {}
  }
  for (let i = 0; i < dists.length; i++) {
    const city1 = dists[i][0]
    const city2 = dists[i][1]
    if (unionSet.parent[city1] === undefined) {
      unionSet.parent[city1] = city1
      unionSet.size[city1] = 1
    }
    if (unionSet.parent[city2] === undefined) {
      unionSet.parent[city2] = city2
      unionSet.size[city1] = 1
    }
  }
  return unionSet
}

console.log(findMST(distances))
