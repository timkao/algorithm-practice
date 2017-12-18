/*
  initialize linked list
*/

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

const newList = new LinkedList();
newList.addToHead(3)
newList.addToHead(5)
newList.addToHead(1)
newList.addToHead(10)
newList.addToHead(3)
newList.addToHead(8)
newList.addToTail(90)

/*
  interview question 2.3
*/

// prepare data for test
let testNode;
let headNode = newList.head;
for (var i = 0; i < 4; i++) {
  headNode = headNode.next;
  if (i === 3) {
    testNode = headNode;
  }
}

console.log(testNode);   // value = 5, next => 3, prev => 1

/*
  knowing the headnode
*/

function deleteMiddleNode(removingNode, startNode) {
    if (startNode === null) { return null; }
    if (startNode.next === null) { return 'done'}
    if (startNode.next !== null) {
      if (startNode.next.value === removingNode.value && startNode.next.next === removingNode.next) {
        startNode.next = removingNode.next;
        removingNode.next = null;
      }
    }
    startNode = startNode.next
    deleteMiddleNode(removingNode, startNode);
}

//deleteMiddleNode(testNode, newList.head);


/*
  do not know the headNode
*/

function deleteMiddleNode2(removingNode) {
  if (removingNode === null || removingNode.next === null) { return false }
  removingNode.value = removingNode.next.value;
  removingNode.next = removingNode.next.next;
}

deleteMiddleNode2(testNode);

/*
  testing case
*/

let test = [];
while (newList.head !== null) {
  test.push(newList.head.value);
  newList.head = newList.head.next;
}

console.log(test);
