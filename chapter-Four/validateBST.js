/*
  interview question 4.5
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
const Three2 = new Tree(3);

Four.left = Two;
Four.right = Twenty;
Two.left = One;
Two.right = Three;
Twenty.left = Fifteen;
Twenty.right = Forty;
Three.right = Three2;


/*
  solution 1 (cannot handle the case when the root's value is equal to the value of right Node)
*/

// depth first in-order traversal
// If it is a BST, the new Element should always be bigger than the old Element
let lastValue = null;
function validateBST(tree) {
  // check the left Subtree, if everything is ok, we should proceed
  if (tree.left !== null) {
    if (validateBST(tree.left) === false) {
      return false;
    }
  }
  // the new Element should be bigger than the last Element
  if (lastValue === null) {
    lastValue = tree.value;
  } else if (lastValue > tree.value) {
    return false;
  } else {
    lastValue = tree.value;
  }
  // check the right right Subtree, if everything is ok, we should proceed
  if (tree.right !== null) {
    if (validateBST(tree.right) === false) {
      return false
    }
  }
  // if left and right are both good, return true
  return true;
}


/*
  testing case
*/

console.log(validateBST(Four))

/*
  Efficiency
  Time: O(N)
  Space: O(1)
*/


/*
  solution 2 (handle all cases)
*/

function validateBST2(tree, max = null, min = null) {


    if (max !== null && tree.value > max) {
      return false;
    }

    if (min !== null && tree.value <= min) {
      return false;
    }

    // left node will have a upper limit
    if (tree.left !== null) {
      if (validateBST2(tree.left, tree.value, min) === false) {  // keep things going when the result is true
        return false
      }
    }

    // right node will have a lower limit
    if (tree.right !== null) {
      if (validateBST2(tree.right, max, tree.value) === false) {
        return false
      }
    }
    return true;

}

console.log(validateBST2(Four))
