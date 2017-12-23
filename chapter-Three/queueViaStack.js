/*
  initialize a stack
*/

function Stack() {
  this.top = null;
  this.minArr = [];
  this.minIndex = null;
  this.arr = [];
}

Stack.prototype.pop = function() {
  if (this.top === null || this.top < 0) { return null }
  const result = this.arr[this.top];
  const currMin = this.minArr[this.minIndex];
  this.top--

  if (result === currMin) {
    this.minIndex--;
  }

  return result;
}

Stack.prototype.push = function(value) {
  if (this.top === null || this.top < 0) {
    this.top = 0;
    this.minIndex = 0;
    this.minArr[this.minIndex] = value;
    this.arr[this.top] = value;
  }
  else {
    this.top++;
    this.arr[this.top] = value;
    if (value <= this.minArr[this.minIndex]) {
      this.minIndex++
      this.minArr[this.minIndex] = value;
    }
  }
}

Stack.prototype.min = function() {
  return this.minArr[this.minIndex];
}

Stack.prototype.len = function() {
  if (this.top === null || this.top < 0) { return null}
  else {
    return this.top + 1;
  }
}

/*
  interview question 3.4
*/

function MyQueue(){
  this.pushStack = new Stack();
  this.popStack = new Stack();
}

MyQueue.prototype.enqueue = function(value){
  this.pushStack.push(value);
}

MyQueue.prototype.dequeue = function() {
  if (this.popStack.len() === null) {
    if (this.pushStack.len() === null) {
      return null;
    } else {
      const pushStackLen = this.pushStack.len();
      for (var i = 0; i < pushStackLen; i++) {
        this.popStack.push(this.pushStack.pop());
      }
    }
  }
  return this.popStack.pop();
}

const newMyQueue = new MyQueue();

newMyQueue.enqueue(1);
newMyQueue.enqueue(2);
newMyQueue.enqueue(3);
console.log(newMyQueue.dequeue());
newMyQueue.enqueue(4);
newMyQueue.enqueue(5);
newMyQueue.enqueue(6);
console.log(newMyQueue.dequeue());

console.log('push stack: ', newMyQueue.pushStack);
console.log('pop stack: ', newMyQueue.popStack);
