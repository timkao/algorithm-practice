/*
  interview question 4.6
*/

function Tree(value) {
  this.value = value
  this.left = null;
  this.right = null;
  this.parent = null;
}

const One = new Tree(1);
const Eight = new Tree(8);
const Five = new Tree(5);
const Four = new Tree(4);
const Twenty = new Tree(20);
const Twelve = new Tree(12);
const Thirty = new Tree(30);
const TwentyTwo = new Tree(22);
const Seven = new Tree(7);
const Three = new Tree(3);
const Two = new Tree(2);


Eight.left = Five;
Eight.right = Twenty;
Five.parent = Eight;
Twenty.parent = Eight;
Five.left = One;
Five.right = Seven;
One.parent = Five;
Seven.parent = Five;
One.right = Four;
Four.parent = One;
Four.left = Three;
Three.parent = Four;
Twenty.left = Twelve;
Twenty.right = TwentyTwo;
Twelve.parent = Twenty;
TwentyTwo.parent = Twenty;
TwentyTwo.right = Thirty;
Thirty.parent = TwentyTwo;
Three.left = Two;
Two.parent = Three;

function successor(node) {
  if (node.right === null) {
    if (node.parent.left === node) {
      return node.parent;
    } else if (node.parent.right === node && node.parent.parent !== null && node.parent.parent.right === node.parent) {
      return null;
    } else if (node.parent.right === node && node.parent.parent !== null) {
      return node.parent.parent
    } else {
      return null
    }
  }
  else {
    if (node.right.left === null) {
      return node.right;
    } else {
      return findMostLeftNode(node.right);
    }
  }
}

function findMostLeftNode(node) {
  if (node.left !== null) {
    return findMostLeftNode(node.left)
  }
  return node;
}


console.log(successor(Twelve));   // return 8 node
console.log(successor(Seven));    // return 20 node
console.log(successor(Thirty));   // return null
console.log(successor(Four));     // return 5 node
console.log(successor(One));      // return 2 node

function successor2(tree) {
  if (tree.right !== null) { return leftMost(tree.right)}
  if (tree.parent.left === tree) { return tree.parent}
  return checkParent(tree.parent);
}

function leftMost(tree) {
  if (tree.left === null) { return tree }
  else { return leftMost(tree.left)}
}

function checkParent(tree) {
  if (tree.parent.left === tree) { return tree.parent}
  else { return null}
}

console.log(successor2(Twelve));   // return 8 node
console.log(successor2(Seven));    // return 20 node
console.log(successor2(Thirty));   // return null
console.log(successor2(Four));     // return 5 node
console.log(successor2(One));      // return 2 node

function getSize(tree, cum = 0) {
  if (tree === null) {
    return cum;
  }
  cum++
  return cum + getSize(tree.left) + getSize(tree.right);
}

console.log(getSize(Eight));
