var zigzagLevelOrder = function(root) {
  let queue = []
  let height = 0
  let nextQueue = []
  let temp = []
  const result = []
  queue.unshift(root)
  while (queue.length > 0) {
      const curNode = queue.shift()
      if (curNode !== null) {
          if (height % 2 === 0) {
              temp.push(curNode.val)
          } else {
              temp.unshift(curNode.val)
          }
          nextQueue.push(curNode.left)
          nextQueue.push(curNode.right)
      }

      if (queue.length === 0 && temp.length > 0) {
          result.push(temp.slice(0))
          temp = []
          queue = nextQueue
          nextQueue = []
          height += 1
      }
  }
  return result
};
