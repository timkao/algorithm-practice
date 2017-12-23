
/*
  initialized LinkedList
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

/*
  build Queue Structure with LinkedList
*/

function Queue() {
  this.len = 0;
  this.que = new LinkedList();
}

Queue.prototype.enqueue = function(value) {
  this.len++;
  this.que.addToTail(value);
}

Queue.prototype.dequeue = function() {
  if (this.len === 0) {
    return undefined;
  }

  this.len--
  return this.que.removeHead();
}

Queue.prototype.size = function() {
  return this.len;
}

/*
  interview question 3.6
*/

function Animal(type, code) {
  this.type = type;
  this.code = code;
}

function AnimalShelter() {
  this.cats = new Queue();
  this.dogs = new Queue();
  this.currCode = 0;
}

AnimalShelter.prototype.enqueue = function(value) {
  let newAnimal;
  if (value === 'cat') {
    newAnimal = new Animal(value, this.currCode);
    this.cats.enqueue(newAnimal);
  } else if (value === 'dog') {
    newAnimal = new Animal(value, this.currCode);
    this.dogs.enqueue(newAnimal);
  }
  this.currCode++;
}

AnimalShelter.prototype.dequeueAny = function() {
  if (this.cats.size() === 0 && this.dogs.size() === 0) {
    return undefined;
  } else if ( this.cats.size() === 0) {
    return this.dogs.dequeue();
  } else if (this.dogs.size() === 0) {
    return this.cats.dequeue();
  }

  if (this.cats.que.head.value.code < this.dogs.que.head.value.code) {
    return this.cats.dequeue();
  } else {
    return this.dogs.dequeue();
  }
}

AnimalShelter.prototype.dequeueCat = function(){
  if (this.cats.size() === 0) {return undefined }
  else {
    return this.cats.dequeue();
  }
}

AnimalShelter.prototype.dequeueDog = function(){
  if (this.dogs.size() === 0) {return undefined }
  else {
    return this.dogs.dequeue();
  }
}

/*
  testing case
*/

const testShelter = new AnimalShelter();

testShelter.enqueue('cat')
testShelter.enqueue('cat')
testShelter.enqueue('dog')
testShelter.enqueue('cat')
testShelter.enqueue('cat')
testShelter.enqueue('cat')
testShelter.enqueue('dog')
testShelter.enqueue('dog')
testShelter.enqueue('cat')

console.log(testShelter.dequeueAny());
console.log(testShelter.dequeueAny());
console.log(testShelter.dequeueAny());
console.log(testShelter.dequeueAny());
console.log(testShelter.dequeueAny());
console.log(testShelter.dequeueAny());
console.log(testShelter.dequeueAny());
console.log(testShelter.dequeueCat());
console.log(testShelter.dequeueDog());
console.log(testShelter.dequeueDog());

/*
  efficiency
  time: O(1)
  space: O(N)
*/
