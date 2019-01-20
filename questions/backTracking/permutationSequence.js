/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const numberList = generateList(n)
  const permutations = []
  const allPer = buildPermutation(numberList, k, '', permutations, numberList.head)
  return allPer[allPer.length - 1]
};

function buildPermutation(nums, k, acc, combinations, startNode) {
  if (combinations.length === k) return combinations
  if (acc.length === nums.size) {
      combinations.push(acc)
      return combinations
  }
  let currNode = startNode
  let prevNode = null
  while (currNode !== null) {
      const currNum = currNode.val
      moveForward(nums, startNode, currNode, prevNode)
      buildPermutation(nums, k, acc + currNum, combinations, currNode.next)
      moveBack(nums, startNode, currNode, prevNode)
      prevNode = currNode
      currNode = currNode.next
  }
  return combinations
}

function LinkedList() {
  this.head = null
  this.size = 0
  this.tail = null
}

LinkedList.prototype.add = function(val) {
  this.size += 1
  this.tail.next = new ListNode(val)
  this.tail = this.tail.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}

function generateList(num) {
  const newList = new LinkedList()
  for (var i = 1; i <= num; i++) {
      const newNode = new ListNode(i)
      if (newList.head === null) {
          newList.head = newNode
          newList.tail = newNode
          newList.size += 1
      } else {
          newList.add(i)
      }
  }
  return newList
}

function moveForward(list, startNode, curNode, prevNode) {
  if (startNode.val !== curNode.val) {
      prevNode.next = curNode.next
      curNode.next = startNode
  }
}

function moveBack(list, startNode, curNode, prevNode) {
  if (startNode.val !== curNode.val) {
      curNode.next = prevNode.next
      prevNode.next = curNode
  }
}
