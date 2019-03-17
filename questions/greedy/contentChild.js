var findContentChildren = function(g, s) {
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)
  let spt = 0
  let result = 0
  for (let i = 0; i < g.length; i++) {
      if (spt >= s.length) return result
      const curFac = g[i]
      if (curFac <= s[spt]) {
          spt += 1
          result += 1
      }
  }
  return result
};
