var pathSum = function(root, sum) {
  if (root === null) return 0
  let count = 0
  const leftArr = findSums(root.left, sum)
  const rightArr = findSums(root.right, sum)
  if (root.val === sum) count += 1
  for (let i = 0; i < leftArr.length; i++) {
      const curLeft = leftArr[i]
      if (curLeft + root.val === sum) {
          count += 1
      }
  }
  for (let j = 0; j < rightArr.length; j++) {
      const curRight = rightArr[j]
      if (curRight + root.val === sum) {
          count += 1
      }
  }
  return count

  function findSums(node, target) {
      if (node === null) return []
      const result = []
      if (node.val === sum) count += 1
      result.push(node.val)
      const leftArr = findSums(node.left, target)
      const rightArr = findSums(node.right, target)
      for (let i = 0; i < leftArr.length; i++) {
          const curLeft = leftArr[i]
          if (curLeft + node.val === sum) {
              count += 1
          }
          result.push(curLeft + node.val)
      }
      for (let j = 0; j < rightArr.length; j++) {
          const curRight = rightArr[j]
          if (curRight + node.val === sum) {
              count += 1
          }
          result.push(curRight + node.val)
      }
      return result
  }
};
