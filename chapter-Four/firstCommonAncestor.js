/*
  interview question 4.8
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



/*
  solution 1 (slower and a bit different definition of "ancestor" )
*/

function findCommonAncestor(tree, nodeOne, nodeTwo) {

  if (tree.left === nodeOne || tree.right === nodeOne || tree.left === nodeTwo || tree.right === nodeTwo) {
    return tree;
  }
  let leftSubtree = 0;
  let rightSubtree = 0;

  if (tree.left !== null) {
    leftSubtree = subtreeValidation(tree.left, nodeOne, nodeTwo);
    //console.log('leftSubtree: ', leftSubtree);
  }

  if (tree.right !== null) {
    rightSubtree = subtreeValidation(tree.right, nodeOne, nodeTwo);
    //console.log('rightSubtree: ', rightSubtree)
  }

  if (leftSubtree === 2) {
    return findCommonAncestor(tree.left, nodeOne, nodeTwo);
  } else if (rightSubtree === 2) {
    return findCommonAncestor(tree.right, nodeOne, nodeTwo);
  } else if (rightSubtree === 1 && leftSubtree === 1) {
    return tree;
  }

  return false

}

function subtreeValidation(tree, nodeOne, nodeTwo, sum = 0) {

  if (sum === 2) {
    return sum;
  }

  if (tree.left !== null) {
    if (tree.left === nodeOne || tree.left === nodeTwo) {
      sum++
    }
    // sum is a "value", it is passed to a function as the same value but in different memory address
    sum = subtreeValidation(tree.left, nodeOne, nodeTwo, sum); // if sum is an object, we do not need "sum = "
  }

  if (tree.right !== null) {
    if (tree.right === nodeOne || tree.right === nodeTwo) {
      sum++
    }
    sum = subtreeValidation(tree.right, nodeOne, nodeTwo, sum);
  }

  return sum;

}

console.log(findCommonAncestor(One, Twenty, Fifteen)) // return 1;
console.log(findCommonAncestor(One, Two, Three)) // return 20;
console.log(findCommonAncestor(One, Forty, Five)) // return 1;
console.log(findCommonAncestor(One, Four, Two)) // return 20 (it should return 2 with the definition in book)
console.log(findCommonAncestor(One, Fifty, Five)) // return 3;

/*
  solution 2 (faster)
*/

function Result(node, isAn) {
  this.node = node;
  this.isAn = isAn
}

function commonAncestor(root, nodeA, nodeB) {
  const result = commonAncestorHelper(root, nodeA, nodeB);
  if (result.isAn) {
    return result.node
  }
  return null;
}

function commonAncestorHelper(root, nodeA, nodeB) {
  if (root === null) { return new Result(null, false)}
  if (root === nodeA && root === nodeB) {
    return new Result(root, true)
  }

  const resultX = commonAncestorHelper(root.left, nodeA, nodeB);
  if (resultX.isAn) { return resultX }

  const resultY = commonAncestorHelper(root.right, nodeA, nodeB);
  if (resultY.isAn) { return resultY }

  if (resultX.node !== null && resultY.node !== null) {
    return new Result(root, true)
  } else if (root === nodeA || root === nodeB) {
    const isAncestor = resultX.node !== null || resultY.node !== null
    return new Result(root, isAncestor);
  } else {
    return new Result(resultX.node !== null ? resultX.node : resultY.node, false);
  }

}

console.log(commonAncestor(One, Twenty, Fifteen)) // return 1;
console.log(commonAncestor(One, Two, Three)) // return 20;
console.log(commonAncestor(One, Forty, Five)) // return 1;
console.log(commonAncestor(One, Four, Two)) // return 20;
console.log(commonAncestor(One, Fifty, Five)) // return 3;
