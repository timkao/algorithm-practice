var levelOrderBottom = function(root) {
  const result = []
  let queue = []
  let nextQueue = []
  let temp = []
  queue.unshift(root)
  while (queue.length > 0) {
      const curr = queue.shift()
      if (curr !== null) {
          temp.push(curr.val)
          nextQueue.push(curr.left)
          nextQueue.push(curr.right)
      }
      if (queue.length === 0 && temp.length > 0) {
          result.unshift(temp.slice(0))
          temp = []
          queue = nextQueue
          nextQueue = []
      }
  }
  return result
};
