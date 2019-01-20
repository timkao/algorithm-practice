var deleteDuplicates = function(head) {
  let pointer = head
  while (pointer !== null && pointer.next !== null) {
    if (pointer.val === pointer.next.val) {
      pointer.next = pointer.next.next
    }
    if (pointer.next !== null && pointer.val !== pointer.next.val) {
      pointer = pointer.next
    }
  }
  return head
};
