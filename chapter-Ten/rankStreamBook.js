function Tree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
  this.size = 0;
}

Tree.prototype.insert = function(value) {
  if (this.value < value) {
    if (this.right === null) {
      this.right = new Tree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    this.size++
    if (this.left === null) {
      this.left = new Tree(value);
    } else {
      this.left.insert(value);
    }
  }
}

function RankStream() {
  this.head = null;
  this.arr = [];
}

RankStream.prototype.generate = function(value) {
  this.arr.push(value)
  this.track(value)
}

RankStream.prototype.track = function(value) {
  const nTree = new Tree(value);
  if (this.head === null) {
    this.head = nTree;
  } else {
    this.head.insert(value)
  }
}

RankStream.prototype.getRankOfNumber = function(num) {
  return getRank(this.head, num)
}

function getRank(tree, num, prevCount = 0) {
  if (tree === null) { return prevCount }
  if (tree.value === num) { return prevCount + tree.size}
  if (tree.value < num) {
    return getRank(tree.right, num, prevCount + tree.size + 1)
  } else {
    return getRank(tree.left, num, prevCount)
  }
}


const testStream = new RankStream();
testStream.generate(20);
testStream.generate(15);
testStream.generate(10);
testStream.generate(5);
testStream.generate(13);
testStream.generate(25);
testStream.generate(23);
testStream.generate(24);

console.log(testStream.getRankOfNumber(20))
console.log(testStream.getRankOfNumber(25))
console.log(testStream.getRankOfNumber(24))
console.log(testStream.getRankOfNumber(26))
console.log(testStream.getRankOfNumber(12))
