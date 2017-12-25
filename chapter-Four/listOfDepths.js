const Node = function (value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}

const LinkedList = function () {
  this.head = undefined;
  this.tail = undefined;
};

LinkedList.prototype.addToHead = function (value) {
  const newNode = new Node(value);
  const oldNode = this.head;

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.head = newNode;
    oldNode.previous = newNode;
    newNode.next = oldNode;
  }

}


LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value);
  const oldNode = this.tail;

  if (!this.tail) {
    this.tail = newNode;
    this.head = newNode;
  } else {
    oldNode.next = newNode;
    newNode.previous = oldNode;
    this.tail = newNode;
  }

}

LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    return undefined
  }
  const result = this.head;
  if (!result.next) {
    this.head = undefined;
    this.tail = undefined;
  } else {
    this.head = result.next;
    this.head.previous = null;
  }

  return result.value;
}

LinkedList.prototype.removeTail = function () {
  if (!this.tail) {
    return undefined
  }
  const result = this.tail;
  if (!result.previous) {
    this.tail = undefined;
    this.head = undefined;
  } else {
    this.tail = result.previous;
    this.tail.next = null;
  }
  return result.value;
}


LinkedList.prototype.search = function (target, curr) {
  if (this.head === undefined) {
    return null
  }

  if (curr === undefined) {
    curr = this.head;
  }
  if (typeof target === 'string') {
    if (curr.value === target) {
      return curr.value
    } else if (curr.next === null) {
      return null;
    }
  }
  else {
    if (target(curr.value)) {
      return curr.value;
    } else if (curr.next === null) {
      return null;
    }
  }

  curr = curr.next;
  return this.search(target, curr);
}



/*
  interview Question 4.3
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

One.left = Two;
One.right = Three;
Two.left = Four;
Two.right = Five;
Four.left = Seven;
Four.right = Eight;
Three.left = Six;


function listOfDepths(tree, lists = [], level = 0) {

  if (lists[level] === undefined) {
    lists[level] = new LinkedList();
    lists[level].addToTail(tree.value);
  } else {
    lists[level].addToTail(tree.value);
  }

  level++

  if (tree.left !== null) {
    listOfDepths(tree.left, lists, level)
  }
  if (tree.right !== null) {
    listOfDepths(tree.right, lists, level);
  }
  return lists;
}

/*
  testing case
*/

console.log(listOfDepths(One))

/*
  efficiency
  time: O(N)
  space: O(N)
*/

