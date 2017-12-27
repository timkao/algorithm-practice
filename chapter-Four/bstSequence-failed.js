/*
  interview question 4.9
*/

function Tree(value) {
  this.value = value
  this.left = null;
  this.right = null;
  this.routes = [];
}

function HelpTree(value) {
  this.value = value;
  this.neighbors = [];
}


const Twenty = new Tree(20);
const Ten = new Tree(10);
const Thirty = new Tree(30);
const Five = new Tree(5);
const Fifteen = new Tree(15);
const Forty = new Tree(40);
const TwentyTwo = new Tree(22);

Twenty.left = Ten;
Twenty.right = Thirty;
Ten.left = Five;
Ten.right = Fifteen;
Thirty.right = Forty;
Thirty.left = TwentyTwo;

function bstSequence(root) {

  // create a new tree
  routesHelper(root);
  return root;
  // traserve the tree

}

function routesHelper(root, prevRoutes = []) {

  for (var i = 0; i < prevRoutes.length; i++) {
    if (prevRoutes[i] !== root) {
      const newOne = new Tree(prevRoutes[i].value);
      newOne.left = prevRoutes[i].left;
      newOne.right = prevRoutes[i].right;
      root.routes.push(newOne);
      //root.routes.push(prevRoutes[i])
    }
  }
  if (root.left ===  null && root.right === null ) { return null }

  if (root.left !== null) {
    const newTwo = new Tree(root.left.value);
    newTwo.left = root.left.left;
    newTwo.right = root.left.right;
    newTwo.routes = root.left.routes;
    root.routes.push(newTwo);
    // root.routes.push(root.left);
  }
  if (root.right !== null) {
    const newThree = new Tree(root.right.value);
    newThree.left = root.right.left;
    newThree.right = root.right.right;
    newThree.routes = root.right.routes;
    root.routes.push(newThree);
    //root.routes.push(root.right);
  }
  //console.log(root.routes);
  for (let j = 0; j < root.routes.length; j++) {
    routesHelper(root.routes[j], root.routes);
  }

}


function findSibling(root, node) {
  if (root === null || root === node) {
    return null;
  }

  if (root.left === node) {
    return root.right;
  } else if (root.right === node) {
    return root.left;
  }

  const resultLeft = findSibling(root.left, node);
  if (resultLeft !== null) {
    return resultLeft;
  }

  const resultRight = findSibling(root.right, node);
  if (resultRight !== null) {
    return resultRight;
  }

  return null

}

console.log(bstSequence(Twenty).left.routes)
