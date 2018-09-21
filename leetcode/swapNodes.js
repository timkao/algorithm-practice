function ListNode(val) {
  this.val = val;
  this.next = null;
}

const one = new ListNode(1)
const two = new ListNode(2)
const three = new ListNode(3)
const four = new ListNode(4)
const five = new ListNode(5)
const six = new ListNode(6)

one.next = two
two.next = three
three.next = four
four.next = five
five.next = six

let head = one;

function swapNodes(node, preTemp) {
if (node === null || node.next === null) {
  return head
}
const temp = node.next.next;
node.next.next = node
if (preTemp !== undefined) {
  preTemp.next = node.next
}

if (node === head) {
  head = node.next
}

node.next = temp
return swapNodes(temp, node)
}

console.log(swapNodes(one))
