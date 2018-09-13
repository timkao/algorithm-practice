function Node(val) {
  this.value = val;
  this.right = null;
  this.left = null;
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);

one.left = two
one.right = three
two.left = four
two.right = five
five.left = seven
five.right = eight
three.left = six


function processNode(node) {
  console.log(node.value);
}

function bft(tree) {
  const queue = [];
  queue.push(tree);
  while (queue.length > 0) {
    const currNode = queue.shift()
    processNode(currNode)
    if (currNode.left) {
      queue.push(currNode.left)
    }
    if (currNode.right) {
      queue.push(currNode.right)
    }
  }
}

bft(one)
