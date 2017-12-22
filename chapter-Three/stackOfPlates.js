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
  interview question 3.3
*/

function setOfStacks(limit) {
  this.plateIndex = null;
  this.setOfPlates = [];
  this.limit = limit;
}

setOfStacks.prototype.push = function(value) {
  if (this.setOfPlates.length === 0 || this.plateIndex < 0) {
    const newPlate = new Stack();
    newPlate.push(value);
    this.plateIndex = 0;
    this.setOfPlates[this.plateIndex] = newPlate;
  } else if ( this.setOfPlates[this.plateIndex].len() < this.limit ) {
    this.setOfPlates[this.plateIndex].push(value);
  } else {
    const newPlate2 = new Stack();
    newPlate2.push(value);
    this.plateIndex++;
    this.setOfPlates[this.plateIndex] = newPlate2;
  }
}

setOfStacks.prototype.pop = function() {
  if (this.plateIndex === null || this.plateIndex < 0 ) { return null }
  let currPlate = this.setOfPlates[this.plateIndex];

  while (currPlate.len() === null) {
    this.plateIndex--
    if (this.plateIndex < 0) { return null}
    else {
      currPlate = this.setOfPlates[this.plateIndex];
    }
  }
  const result = currPlate.pop();

  if (currPlate.len() === null) {
    this.plateIndex--
  }

  return result;
}

setOfStacks.prototype.popAt = function(atIndex) {
  if (atIndex > this.plateIndex) { return null}
  else {
    const targetPlate = this.setOfPlates[atIndex];
    const result = targetPlate.pop();

    return result;
  }
}

const newSets = new setOfStacks(2);

for (var i = 0; i < 9; i++) {
  newSets.push(i+1);
}

for (var j = 0; j < 9; j++) {
  console.log(newSets.pop());
}

for (var i = 0; i < 9; i++) {
  newSets.push(i * 10);
}

console.log(newSets.popAt(1));
console.log(newSets.popAt(1));
console.log(newSets.popAt(1));
console.log(newSets.popAt(0));
console.log(newSets.popAt(0));
console.log(newSets.popAt(0));

for (var i = 0; i < 6; i++) {
  console.log(newSets.pop());
}

console.log(newSets)
