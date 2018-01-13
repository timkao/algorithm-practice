/*
  interview question 4.11
*/

/*
  solution 1 (slower)
*/

function TreeWithRandom(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.choices = [];
  this.parent = null;
}

const One = new TreeWithRandom(1);
const Two = new TreeWithRandom(2);
const Three = new TreeWithRandom(3);
const Four = new TreeWithRandom(4);
const Twenty = new TreeWithRandom(20);
const Fifteen = new TreeWithRandom(15);
const Forty = new TreeWithRandom(40);
const Fifty = new TreeWithRandom(50);
const Five = new TreeWithRandom(5);

One.left = Twenty;
One.right = Fifteen;
Twenty.left = Two;
Twenty.right = Three;
Two.left = Four;
Three.left = Fifty;
Three.right = Five;
Fifteen.left = Forty;


TreeWithRandom.prototype.getRandomNode = function() {

  getAllNode(this.choices, this);

  const randomIndex = Math.floor(Math.random() * this.choices.length);
  return this.choices[randomIndex];
}

function getAllNode(choices, node) {
  if (node === null) { return }
  choices.push(node);
  getAllNode(choices, node.left)
  getAllNode(choices, node.right);
}

/*
  Efficiency
  Time: O(N)
  Space: O(N)
*/


console.log('Slow Method: ', Twenty.getRandomNode())

/*
  solution 2 (faster) the key is "Math".
  the root should have 1 / N
  the left tree should have (left.size) / N
  the right tree should have (right.size) / N
  N = 1 + left.size + right.size
*/

function TreeRandom(value) {
  this.value = value;
  this.size = 1;
  this.left = null;
  this.right = null;
}

TreeRandom.prototype.getRandomNode = function() {
  const leftSize = this.left !== null ? this.left.size : 0;
  const randomIndex = Math.floor(Math.random() * this.size);

  if (randomIndex === leftSize) {
    return this;
  } else if (randomIndex < leftSize) {
    return this.left.getRandomNode();
  } else {
    return this.right.getRandomNode();
  }
}

TreeRandom.prototype.insert = function(value) {
  if (value <= this.value) {
    if (this.left === null) {
      this.left = new TreeRandom(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new TreeRandom(value);
      this.right.insert(value);
    }
  }
  this.size++  // In the process of recursion, every node that calls "insert" will increase size by 1
               // Therefore, the size of every node will be updated along the way!
}

const _Twenty = new TreeRandom(20);

_Twenty.insert(10);
_Twenty.insert(30);
_Twenty.insert(5);
_Twenty.insert(15);
_Twenty.insert(40);
_Twenty.insert(4);

console.log('Fast Method: ', _Twenty.getRandomNode());


/*
  solution 3 (faster and less random call)
*/

function TreeRandom2(value) {
  this.value = value;
  this.size = 1;
  this.left = null;
  this.right = null;
}

TreeRandom2.prototype.getRandomNode = function() {
  const leftSize = this.left !== null ? this.left.size : 0;
  const randomIndex = Math.floor(Math.random() * this.size);

  if (randomIndex === leftSize) {
    return this;
  } else if (randomIndex < leftSize) {
    return this.left.getIthNode(randomIndex); // continue using randomIndex to avoid another Math.random()
  } else {
    return this.right.getIthNode(randomIndex - leftSize - 1); // otherwise we will have unlimit calls... since randomIndex keeps the same and leftSize keep decreasing.
  }                                                           // they will never meet the base case
}

TreeRandom2.prototype.insert = function(value) {
  if (value <= this.value) {
    if (this.left === null) {
      this.left = new TreeRandom2(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new TreeRandom2(value);
      this.right.insert(value);
    }
  }
  this.size++  // In the process of recursion, every node that calls "insert" will increase size by 1
               // Therefore, the size of every node will be updated along the way!
}

TreeRandom2.prototype.getIthNode = function(index) {
  const leftSize = this.left !== null ? this.left.size : 0;
  if (index === leftSize) {
    return this;
  } else if (index < leftSize) {
    return this.left.getIthNode(index);
  } else {
    return this.right.getIthNode(index - leftSize - 1);
  }
}

const _Twenty2 = new TreeRandom2(20);

_Twenty2.insert(10);
_Twenty2.insert(30);
_Twenty2.insert(5);
_Twenty2.insert(15);
_Twenty2.insert(40);
_Twenty2.insert(4);

console.log('Fast Method 2: ', _Twenty2.getRandomNode());
