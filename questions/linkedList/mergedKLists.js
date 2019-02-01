var mergeKLists = function(lists) {
  if (lists.length === 1) return lists[0]
  if (lists.length === 0) return null
  return mergeAllLists(lists, lists[0], start = 1)
};

function mergeAllLists(lists, currentList, nextListPointer) {
if (nextListPointer === lists.length) return currentList
const listToBeMerge = lists[nextListPointer]
return mergeAllLists(lists, mergeTwoLists(currentList, listToBeMerge), nextListPointer + 1)
}

function mergeTwoLists(listA, listB) {
if (listA === null && listB === null) return null
if (listA === null && listB !== null) return listB
if (listA !== null && listB === null) return listA
let result = null
if (listA.val < listB.val) {
  result = new ListNode(listA.val)
  listA = listA.next
} else {
  result = new ListNode(listB.val)
  listB = listB.next
}
let resultNode = result
while (listA !== null || listB !== null) {
  if (listA === null) {
      resultNode.next = listB
      return result
  }
  if (listB === null) {
      resultNode.next = listA
      return result
  }
  if (listA.val < listB.val) {
    resultNode.next = listA
    resultNode = resultNode.next
    listA = listA.next
  } else {
    resultNode.next = listB
    resultNode = resultNode.next
    listB = listB.next
  }
}
return result
}
