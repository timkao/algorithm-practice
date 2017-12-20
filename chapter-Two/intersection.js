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
listOne.addToHead(2)
listOne.addToHead(6)
listOne.addToHead(8)
listOne.addToHead(9)
listOne.addToHead(5)
listOne.addToHead(10)
listOne.addToHead(3)


const listTwo = new LinkedList();
listTwo.addToHead(1)
listTwo.addToHead(2)
listTwo.addToHead(4)

let testNode = listOne.head;
for (var i = 0; i < 4; i++) {
  testNode = testNode.next;
}
listTwo.tail.next = testNode;

let testNode2 = listTwo.head;
while (testNode2 !== null ) {
  console.log(testNode2.value);
  testNode2 = testNode2.next;
}
console.log('---------------')

let testNode3 = listOne.head;
while (testNode3 !== null ) {
  console.log(testNode3.value);
  testNode3 = testNode3.next;
}


/*
  solution 1 (counting)
*/

function intersection(listOne, listTwo) {
  let pointerOne = listOne.head;
  let pointerTwo = listTwo.head;

  while (pointerOne !== null || pointerTwo !== null) {

    if (countHelper(pointerOne)) {
      return pointerOne;
    }
    pointerOne = pointerOne.next;

    if (countHelper(pointerTwo))  {
      return pointerTwo;
    }
    pointerTwo = pointerTwo.next;
  }
  return false;

}


function countHelper(pointer) {
  if (pointer !== null) {
    if (pointer.count === undefined) {
      pointer.count = 1;
    } else {
      pointer.count++
      if (pointer.count === 2) {
        return true;
      }
    }
  }
  return false;
}

// just practicing reversing a linked list
function reverse(list) {
  let pointer = list.head
  let head = null;
  while (pointer !== null) {
    let temp = pointer.next;
    pointer.next = head;
    head = pointer
    pointer = temp;
  }
  return head;
}

//console.log(intersection(listOne, listTwo));

/*
  solution 2 (padding with zero or chopping off the excess part)
*/

function intersection2(listA, listB) {
  let lenA = 0;
  let pointerA = listA.head;
  let lenB = 0;
  let pointerB = listB.head;

  if (pointerA === pointerB) {
    return pointerA;
  }

  while (pointerA !== null) {
    lenA++
    pointerA = pointerA.next;
  }

  while (pointerB !== null) {
    lenB++
    pointerB = pointerB.next;
  }

  if (lenA === lenB) {
    return checkIntersection(listA.head, listB.head);
  } else if (lenA > lenB) {
    for (var i = 0; i < lenA - lenB; i++) {
      listA.head = listA.head.next;
    }
    return checkIntersection(listA.head, listB.head);
  } else {
    for (var j = 0; j < lenB - lenA; j++) {
      listB.head = listB.head.next;
    }
    return checkIntersection(listA.head, listB.head);
  }

}

function checkIntersection(nodeA, nodeB) {
  while (nodeA !== null) {
    if (nodeA === nodeB) {
      return nodeA
    }
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  return false;
}


console.log(intersection2(listOne, listTwo));
