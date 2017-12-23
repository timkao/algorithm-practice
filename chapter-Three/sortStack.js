/*
  interview Question 3.5
*/

function Stack() {
  this.top = null;
  this.arr = [];
}

Stack.prototype.pop = function () {
  if (this.top === null || this.top < 0) { return null }
  const result = this.arr[this.top];
  this.top--;

  return result;
}

Stack.prototype.push = function (value) {
  if (this.top === null || this.top < 0) {
    this.top = 0;
    this.arr[this.top] = value;
  }
  else {
    this.top++;
    this.arr[this.top] = value;
  }
}

Stack.prototype.peek = function () {
  if (this.top === null || this.top < 0) { return null; }
  return this.arr[this.top];
}

Stack.prototype.isEmpty = function () {
  if (this.top === null || this.top < 0) { return true; }
  return false;
}

Stack.prototype.sort = function () {
  const tempStack = new Stack();

  // dump all the elements to the temp Stack
  while (!this.isEmpty()) {
    tempStack.push(this.pop());
  }

  // start sorting
  while (!tempStack.isEmpty()) {
    // when the target stack is empty, just push the element into it
    if (this.isEmpty()) {
      this.push(tempStack.pop());
    } else {
      // when the target stack is not empty, we need to compare
      // if the peek of the target stack is smaller than temp stack
      if (tempStack.peek() > this.peek()) {
        // we pop out the peek of tempStack and cache it in another variable
        let temp = tempStack.pop();
        // we pop out the peek of targetStack into temp Stack, until we find a bigger element in target Stack
        tempStack.push(this.pop());
        while (temp > this.peek() && !this.isEmpty()) {
          tempStack.push(this.pop());
        }
        // push the cached value into the target Stack
        this.push(temp);
      } else {
        this.push(tempStack.pop());
      }
    }
  }
}


/*
  testing case
*/

const testStack = new Stack();
testStack.push(4);
testStack.push(5);
testStack.push(1);
testStack.push(10);
console.log(testStack);
testStack.sort();
console.log(testStack);

/*
  efficiency
  time: O(N^2)
  space: O(N)
*/
