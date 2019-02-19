var mincostToHireWorkers = function(quality, wage, K) {
  const ratio = []
  for (let i = 0; i < quality.length; i++) {
      ratio.push(wage[i] / quality[i])
  }
  const quaRatioMap = createQRMap(ratio, quality) // ratio: qualityIdx (array)
  ratio.sort((a, b) => a - b)
  const curQual = buildQualArr(ratio, quaRatioMap, K)
  let curRatio = ratio[K - 1]
  let curCost = calCost(curRatio, curQual)
  let result = curCost

  // apply new ratios
  for (let m = K; m < ratio.length; m++) {
      const newRatio = ratio[m]
      const diff = newRatio - curRatio // since we sort it, new ratio is always bigger than old ratio

      // update cost and find the largest quality
      let maxQual = curQual[0]
      let maxIdx = 0
      for (let n = 0; n < curQual.length; n++) {
          if (curQual[n] > maxQual) {
              maxQual = curQual[n]
              maxIdx = n
          }
          curCost += diff * curQual[n]
      }

      // remove the largest quality and apply the new quality. update cost accordingly
      const nextQual = getNextQual(newRatio, quaRatioMap)
      curCost -= maxQual * newRatio
      curCost += nextQual * newRatio
      result = Math.min(result, curCost)
      curQual.splice(maxIdx, 1)
      curQual.push(nextQual)
  }
  return curCost
};
