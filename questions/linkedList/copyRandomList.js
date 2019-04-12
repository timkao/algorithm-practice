var copyRandomList = function(head) {
  const nodeMap = new Map()
  return copyNode(head)

  function copyNode(node) {
    if (node === null) return null
    if (nodeMap.has(node)) return nodeMap.get(node)
    const result = new Node(node.val)
    nodeMap.set(node, result)
    result.next = copyNode(node.next)
    result.random = copyNode(node.random)
    return result
  }

};

var copyRandomListAlt = function(head) {
  if (head === null) return null
  const nodeMap = new Map()

  let pt1 = head.next
  const result = new Node(head.val)
  nodeMap.set(head, result)


  let pt2 = result
  while (pt1 !== null) {
     pt2.next = new Node(pt1.val)
     nodeMap.set(pt1, pt2.next)
     pt2 = pt2.next
     pt1 = pt1.next
  }
  pt2.next = null

  pt1 = head
  pt2 = result
  while (pt1 !== null) {
    if (pt1.random !== null) {
        pt2.random = nodeMap.get(pt1.random)
    } else {
        pt2.random = null
    }
    pt1 = pt1.next
    pt2 = pt2.next
  }
  return result;

};

var copyRandomListAlt2 = function(head) {
  if (head === null) return null

  // copy nodes and link them in the same list as the original one
  let node = head
  while (node !== null) {
    const copy = new Node(node.val, null, null)
    const tail = node.next
    node.next = copy
    copy.next = tail;  // assign correct next pointer
    node = tail
  }

  // assgin random pointers
  node = head
  while (node !== null) {
    if (node.random !== null) {
      node.next.random = node.random.next // the copy version of node.random
    }
    node = node.next.next
  }

  // reset original list and extract copy list
  const ans = head.next
  let ansPt = ans
  node = head
  while (node !== null) {
    node.next = node.next.next
    ansPt.next = ansPt.next === null ? null : ansPt.next.next
    node = node.next
    ansPt = ansPt.next
  }
  return ans
};
