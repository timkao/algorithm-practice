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
  solution 1
*/


function removeDups(list) {
  const buff = [];

  while (list.next !== null) {
    if (buff.length === 0) {
      buff.push(list.value);
    } else if (buff.indexOf(list.value) !== -1) {
      list.previous.next = list.next;
      list.next = null;
    }
    list = list.previous.next;
  }
}

/*
  solution 2 (follow up)
*/

function removeDups2(list) {

  while (list.next !== null) {
    let anotherP2 = list.next
    let currValue = list.value;
    while (anotherP2 !== null) {
      if (currValue === anotherP2.value) {
        anotherP2.prevous.next = anotherP2.next;
        anotherP2.next = null
      }
      anotherP2 = anotherP2.next;
    }
    list = list.next;
  }

}


/*
  solution 3 (follow up with recursion) not sure though...
*/

function removeDups3(list) {

  let currValue = list.value;
  let currValueNode = list;

  while (list.next !== null) {
    if (currValue === list.next.value) {
      list.next = list.next.next;
      list.next.next = null;
    }
    list = list.next;
  }

  if (currValueNode.next !== null) {
    removeDups3(currValueNode.next)
  }


}
