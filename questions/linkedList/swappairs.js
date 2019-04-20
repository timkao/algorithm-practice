var swapPairs = function(head) {
  if (head === null) return null
  if (head.next === null) return head
  const result = head.next

  let back = null
  let mid = head
  let front = head.next

  while (front !== null) {
      mid.next = front.next
      front.next = mid

      if (back !== null) {
          back.next = front
      }

      if (mid.next === null) {
          return result
      } else {
          front = mid.next.next
          back = mid
          mid = mid.next
      }
  }
  return result
};

