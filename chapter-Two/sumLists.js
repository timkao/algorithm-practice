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

const newList1 = new LinkedList();
newList1.addToHead(6)
newList1.addToHead(1)
newList1.addToHead(7)

const newList2 = new LinkedList();
newList2.addToHead(2)
newList2.addToHead(9)
newList2.addToHead(5)


/*
  interview quesiton 2.5
*/

function addTwoList(listOne, listTwo) {
  let base = 0;
  let sum = 0;
  let pointerOne = listOne.head;
  let pointerTwo = listTwo.head;
  const result = new LinkedList();

  while (pointerOne !== null || pointerTwo !== null) {
    if (pointerOne !== null) {
      sum += pointerOne.value * Math.pow(10, base);
      pointerOne = pointerOne.next;
    }
    if (pointerTwo !== null) {
      sum += pointerTwo.value * Math.pow(10, base);
      pointerTwo = pointerTwo.next;
    }
    base++
  }

  for (var i = base - 1; i >= 0; i--) {
    let curr = sum / Math.pow(10, i);
    let value;
    if (curr >= 10) {
      value = Math.floor(sum / Math.pow(10, i + 1))
    } else {
      value = Math.floor(sum / Math.pow(10, i));
    }
    result.addToHead(value);
    sum = sum - value * Math.pow(10, i);
  }
  return result;
}

const resultList = addTwoList(newList1, newList2);

let test = [];
while (resultList.head !== null) {
  test.push(resultList.head.value);
  resultList.head = resultList.head.next;
}

console.log(test);

/*
  interview question 2.5 follow up
*/

const newList3 = new LinkedList();
newList3.addToHead(7)
newList3.addToHead(1)
newList3.addToHead(6)

const newList4 = new LinkedList();
newList4.addToHead(5)
newList4.addToHead(9)
newList4.addToHead(2)

function addTwoList2(listOne, listTwo) {
  let pointerOne = listOne.head;
  let pointerTwo = listTwo.head;
  const numberOne = [];
  const numberTwo = [];
  let sum = 0;
  let result = new LinkedList();

  while (pointerOne !== null) {
    numberOne.unshift(pointerOne.value);
    pointerOne = pointerOne.next;
  }

  while (pointerTwo !== null) {
    numberTwo.unshift(pointerTwo.value);
    pointerTwo = pointerTwo.next;
  }

  for (var i = 0; i < numberOne.length; i++) {
    sum += numberOne[i] * Math.pow(10, i);
  }

  for (var j = 0; j < numberTwo.length; j++) {
    sum += numberTwo[j] * Math.pow(10, j);
  }

  sum = sum.toString();
  for (var i = sum.length - 1; i >= 0; i--) {
    result.addToHead(Number(sum[i]));
  }

  return result;
}

const resultList2 = addTwoList2(newList3, newList4);

let test2 = [];
while (resultList2.head !== null) {
  test2.push(resultList2.head.value);
  resultList2.head = resultList2.head.next;
}

console.log(test2);
