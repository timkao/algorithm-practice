var topKFrequent = function(nums, k) {
  const result = []
  const freqMap = createMap(nums)
  Object.keys(freqMap).forEach(numKey => {
      const curFreq = freqMap[numKey]
      if (result.length < k - 1) {
          result.push([Number(numKey), curFreq])
      } else if (result.length === k - 1) {
          result.push([Number(numKey), curFreq])
          result.sort((a, b) => a[1] - b[1])
      } else if (result.length === k) {
          if (curFreq > result[0][1]) {
              result[0][0] = Number(numKey)
              result[0][1] = curFreq
              result.sort((a, b) => a[1] - b[1])
          }
      }
  })
  return result.map(arr => arr[0])
};

function createMap(nums) {
  const result = {}
  nums.forEach(num => {
      if (result[num] === undefined) {
          result[num] = 1
      } else {
          result[num] += 1
      }
  })
  return result
}
