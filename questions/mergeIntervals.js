var merge = function(intervals) {
  if (intervals.length === 0) return []
  intervals.sort((a, b) => a.start - b.start)
  const result  = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
      const currIn = intervals[i]
      const resultIn = result[result.length - 1]
      if (resultIn.end >= currIn.start) {
          mergeIn(resultIn, currIn)
      } else {
          result.push(currIn)
      }
  }

  return result
};

function mergeIn(intervalA, intervalB) {
  intervalA.end = Math.max(intervalA.end, intervalB.end)
}
