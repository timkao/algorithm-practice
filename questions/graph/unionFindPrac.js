var findRedundantConnection = function(edges) {
  const parent = []
  for (let i = 0; i < edges.length; i++) {
      const vex1 = edges[i][0]
      const vex2 = edges[i][1]
      if (parent[vex1] === undefined) {
          parent[vex1] = vex1
      }
      if (parent[vex2] === undefined) {
          parent[vex2] = vex2
      }
      const root1 = findRoot(parent, vex1)
      const root2 = findRoot(parent, vex2)
      if (root1 === root2) return [vex1, vex2]
      parent[root2] = root1
  }
  return null
};

function findRoot(parent, vex) {
  if (parent[vex] === vex) return vex
  return findRoot(parent, parent[vex])
}
