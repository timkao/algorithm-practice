var addTwoNumbers = function(l1, l2) {
  let pt1 = l1
  let pt2 = l2

  let senitel = new TreeNode(0)
  let ptR = senitel
  let localSum = 0

  while (pt1 !== null || pt2 !== null) {
      localSum = Math.floor(localSum / 10)
      if (pt1 === null && localSum === 0) {
          ptR.next = pt2
          break
      }
      if (pt2 === null && localSum === 0) {
          ptR.next = pt1
          break
      }
      if (pt1 !== null) {
          localSum += pt1.val
          pt1 = pt1.next
      }
      if (pt2 !== null) {
          localSum += pt2.val
          pt2 = pt2.next
      }
      ptR.next = new TreeNode(localSum % 10)
      ptR = ptR.next
  }
  if (localSum >= 10) {
      ptR.next = new TreeNode(1)
  }
  return senitel.next
};
