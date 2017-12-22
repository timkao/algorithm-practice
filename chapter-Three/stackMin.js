/*
  interview question 3.2
*/

function Stack() {
  this.top = null;
  this.minArr = [];
  this.minIndex = null;
  this.arr = [];
}

Stack.prototype.pop = function() {
  if (this.top === null) { return this.top }
  const result = this.arr[this.top];
  const currMin = this.minArr[this.minIndex];
  this.top--

  if (result === currMin) {
    this.minIndex--;
  }

  return result;
}

Stack.prototype.push = function(value) {
  if (this.top === null) {
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


const newStack = new Stack();

newStack.push(100);
newStack.push(2);
newStack.push(-3);
newStack.push(-3);
newStack.push(50);

newStack.pop();
newStack.pop();
newStack.pop();


console.log(newStack.min());
