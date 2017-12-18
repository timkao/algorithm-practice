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
  interview quesiton 2.2
*/

function kthToLast(newList, kth) {
  return kthToLastHelper(newList.head, kth)
}

function kthToLastHelper(headNode, kth) {
  let pointer1 = headNode;
  let pointer2 = null;
  let counter = 0;
  while (pointer1.next !== null) {
    counter++
    pointer1 = pointer1.next
    if (counter === kth) {
      pointer2 = headNode;
    } else if (counter > kth) {
      pointer2 = pointer2.next;
    }
  }
  if (pointer2 === null) {
    return null
  }
  return pointer2.value;
}

console.log(kthToLast(newList, 4));
