/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  const baskets = []
  let curMax = 0
  let currStack = []
  let nextStack = []
  for (var i = 0; i < tree.length; i++) {
      const curType = tree[i]
      if (baskets.length < 2) {
          if (!baskets.includes(curType)) {
              baskets.push(curType)
          }
          currStack.push(curType)
      } else if (baskets.length === 2) {
          if (baskets.includes(curType)) {
              currStack.push(curType)
          } else {
              currStack = updateStackAndBasket(currStack, nextStack, baskets, curType)
              nextStack = []
          }
      }
      curMax = Math.max(curMax, currStack.length)
  }
  return curMax
};


function updateStackAndBasket(currS, nextS, types, newType) {
  types[0] = newType
  const anotherType = currS.pop()
  types[1] = anotherType
  nextS.push(anotherType)
  while (nextS[nextS.length - 1] === currS[currS.length - 1]) {
      nextS.push(currS.pop())
  }
  nextS.push(newType)
  return nextS
}
