var countArrangement = function(N) {
  const allCandidates = []
  for (let i = 1; i <= N; i++) {
      allCandidates[i - 1] = i
  }
  let count = 0
  countArrange(allCandidates, [], 0)
  return count

  function countArrange(allCan, acc, start) {
      if (acc.length === allCan.length) {
          count += 1
          return
      }
      for (let i = start; i < allCan.length; i++) {
          const num = allCan[i]
          const curPos = acc.length + 1
          if (num % curPos === 0 || curPos % num === 0) {
              acc.push(num)
              swap(allCan, start, i)
              countArrange(allCan, acc, start + 1)
              acc.pop()
              swap(allCan, i, start)
          }
      }
  }

  function swap(arr, p1, p2) {
      const temp = arr[p1]
      arr[p1] = arr[p2]
      arr[p2] = temp
  }

};
