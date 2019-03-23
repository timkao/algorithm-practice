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
