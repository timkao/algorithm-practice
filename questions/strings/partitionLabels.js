var partitionLabels = function(S) {
  const idxMap = createIdxMap(S)
  return doPartition(S, idxMap, [], 0)

  function doPartition(str, map, result, start) {
      if (start >= str.length) return result
      const idxArr = map[str[start]]
      let partition = idxArr[idxArr.length - 1]
      for (let i = start + 1; i <= partition; i++) {
          const curIdxArr = map[str[i]]
          let curPartition = curIdxArr[curIdxArr.length - 1]
          partition = Math.max(partition, curPartition)
      }
      result.push(partition - start + 1)
      return doPartition(str, map, result, partition + 1)
  }

  function createIdxMap(str) {
      const result = {}
      for (let i = 0; i < str.length; i++) {
          const curChar = str[i]
          if (result[curChar] === undefined) {
              result[curChar] = [i]
          } else {
              result[curChar].push(i)
          }
      }
      return result
  }

};
