/*
  interview question 4.10
*/

function Tree(value) {
  this.value = value
  this.left = null;
  this.right = null;
}

const One = new Tree(1);
const Two = new Tree(2);
const Three = new Tree(3);
const Four = new Tree(4);
const Twenty = new Tree(20);
const Fifteen = new Tree(15);
const Forty = new Tree(40);
const Fifty = new Tree(50);
const Five = new Tree(5);

One.left = Twenty;
One.right = Fifteen;
Twenty.left = Two;
Twenty.right = Three;
Two.left = Four;
Three.left = Fifty;
Three.right = Five;
Fifteen.left = Forty;

const _Twenty = new Tree(20);
const _Two = new Tree(2);
const _Three = new Tree(3);
const _Fifty = new Tree(50);
const _Five = new Tree(5);


_Twenty.left = _Two;
_Twenty.right = _Three;
_Three.left = _Fifty;
_Three.right = _Five;


function checkSubtree(bigTree, smallTree) {
  if (smallTree ===  null) { return true }
  if (bigTree === null) { return false }
  if (bigTree.value === smallTree.value && isEqual(bigTree, smallTree)) {  // to keep search running even if isEqual returns false
    return true   // should not return isEqual(bigTree, smallTree), it will stop the process when it is false. However, other subtree could still return true
  }
  if (checkSubtree(bigTree.left, smallTree) === true) {
    return true;
  }
  if (checkSubtree(bigTree.right, smallTree) === true) {
    return true;
  }
  return false;
}

function isEqual(treeA, treeB) {
  if (treeA === null && treeB === null) { return true }
  if (treeA === null || treeB === null) { return false }
  if (treeA.value !== treeB.value ) { return false }
  return isEqual(treeA.left, treeB.left) && isEqual(treeA.right, treeB.right);
}

/*
  testing case
*/

console.log(checkSubtree(One, _Twenty))
console.log(checkSubtree(One, _Three))
