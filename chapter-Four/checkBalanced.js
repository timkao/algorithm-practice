/*
  interview question 4.4
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
const Five = new Tree(5);
const Six = new Tree(6);
const Seven = new Tree(7);
const Eight = new Tree(8);
const Nine = new Tree(9);
const Ten = new Tree(10);
const Eleven = new Tree(11);
const Twelve = new Tree(12);
const Thirteen = new Tree(13);
const Fourteen = new Tree(14);

One.left = Two;
One.right = Three;
Two.left = Four;
Two.right = Five;
//Four.left = Six;
Six.left = Seven;
Three.left = Eight;
Three.right = Nine;
Eight.left = Ten;
Eight.right = Eleven;
Nine.left = Twelve;
Nine.right = Thirteen;
//Thirteen.right = Fourteen;

function checkBalanced(tree) {

  // base case
  if (tree.left === null && tree.right === null) {
    return true;
  }

  let currLeft = 0;
  let currRight = 0;

  // check the height of left subtree
  if (tree.left !== null) {
    currLeft = treeHeight(tree.left);
  } else {
    return checkBalanced(tree.right);
  }

  // check the height of right subtree
  if (tree.right !== null) {
    currRight = treeHeight(tree.right)
  } else {
    return checkBalanced(tree.left)
  }

  // if the current height difference is more than 1, return false
  if (Math.abs(currLeft - currRight) > 1) {
    return false;
  } else {
    // apply the same logic to each subtree
    return checkBalanced(tree.left) && checkBalanced(tree.right);
  }

}

// help function to check the height of tree
function treeHeight(tree, height = 0) {
  // use memorization to do optimazation
  if (tree.height !== undefined) {
    return tree.height
  }

  // base case
  if (tree.left === null && tree.right === null) {
    return height;
  }

  // increase the height when not hitting the base case
  height++
  let leftHeight = 0;
  let rightHeight = 0

  // check the height of the left tree
  if (tree.left !== null) {
    leftHeight = treeHeight(tree.left, height);
  }
  // check the height of the right tree
  if (tree.right !== null) {
    rightHeight = treeHeight(tree.right, height);
  }

  // only return the highest one and memorize the height of each tree
  if (leftHeight >= rightHeight) {
    tree.height = leftHeight
    return tree.height;
  } else {
    tree.height = rightHeight
    return tree.height;
  }

}

/*
  testing case
*/
console.log(checkBalanced(One))

/*
  efficiency
  Time: O(N)
  Space: O(N)
*/

function balanced(tree) {

  if (tree === null) {
    return true;
  }

  const dif = Math.abs(checkHeight(tree.left) - checkHeight(tree.right))
  if (dif > 1) {
    return false;
  }
  return balanced(tree.left) && balanced(tree.right);

}

function checkHeight(tree, height = 0) {
  if (tree === null) {
    return height;
  }
  if (tree.height !== undefined) {
    return tree.height;
  }

  height++
  const leftHeight = checkHeight(tree.left, height);
  const rightHeight = checkHeight(tree.right, height);
  tree.height = Math.max(leftHeight, rightHeight);
  return tree.height;
}


console.log(balanced(One))
