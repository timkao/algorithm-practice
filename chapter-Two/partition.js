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
newList.addToHead(2)
newList.addToHead(10)
newList.addToHead(5)
newList.addToHead(8)
newList.addToHead(5)
newList.addToHead(3)
newList.addToTail(1)

/*
  interviewing question 2.4
*/

/*
  solution 1 (with addToTail Method and Tail)
*/

function partition(list, partition){
  const tailNode = list.tail;
  const headNode = list.head;

  partitionHelper(list, tailNode, headNode, partition);

}

function partitionHelper(list, tail, head, partition) {

  if (head === tail) {
    if (head.value >= partition) {
      list.addToTail(head.value);
      head.previous.next = head.next;
      head.previous.next.previous = head.previous
    }
    return "done";
  }
  if (head.value >= partition) {
      list.addToTail(head.value);
      head.previous.next = head.next;
      head.previous.next.previous = head.previous
      head = head.previous.next;
    } else {
      head = head.next;
  }
  partitionHelper(list, tail, head, partition);
}


//partition(newList, 5);




/*
  solution 2 (without addToTail and Tail)
*/

function partition2(list, partition){
  // create two new linked list
  const smaller = new LinkedList();
  const bigger = new LinkedList();

  while (list.head !== null) {
    if (list.head.value >= partition) {
      bigger.addToHead(list.head.value);
    } else {
      smaller.addToHead(list.head.value);
    }
    list.head = list.head.next;
  }

  let smallerPointer = smaller.head;

  // concat two linkedlist
  while (smallerPointer !== null) {

    if (smallerPointer.next === null) {
      smallerPointer.next = bigger.head;
      break;
    }
    smallerPointer = smallerPointer.next;
  }

  return smaller;
}


const result = partition2(newList, 5);

/*
  testing case
*/

let test = [];
while (result.head !== null) {
  test.push(result.head.value);
  result.head = result.head.next;
}

console.log(test);
