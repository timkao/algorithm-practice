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

const listOne = new LinkedList();
listOne.addToHead(4)
listOne.addToHead(3)
listOne.addToHead(3)
listOne.addToHead(4)
listOne.addToHead(1)


const listTwo = new LinkedList();
listTwo.addToHead(4)
listTwo.addToHead(3)
listTwo.addToHead(5)
listTwo.addToHead(3)
listTwo.addToHead(4)


/*
  interview question 2.6
*/

function palindrome(headNode) {
  let pointerOne = headNode;
  let pointerTwo = headNode;
  let buff = [];
  let index = 1;

  while (pointerTwo !== null) {
    if (pointerTwo.next === null) {
      pointerOne = pointerOne.next;
      pointerTwo = pointerTwo.next;
    } else {
      buff.push(pointerOne.value);
      pointerOne = pointerOne.next;
      pointerTwo = pointerTwo.next.next;
    }
  }

  while (pointerOne !== null) {
    if (pointerOne.value !== buff[buff.length - index]) {
      return false;
    }
    index++
    pointerOne = pointerOne.next;
  }

  return true;

}

/*
  testing
*/

console.log(palindrome(listOne.head));
console.log(palindrome(listTwo.head));


/*
  efficiency
  time: O(N)
  space: O(N / 2)
*/

