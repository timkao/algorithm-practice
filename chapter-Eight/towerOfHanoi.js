function hanoiTower() {

  // we have three towers
  let towers = []
  for (var i = 0; i < 3; i++) {
    towers[i] = new Tower(i);
  }

  // decides disks
  const numberOfDisks = 3;
  for (var j = numberOfDisks - 1; j >= 0; j--) {
    towers[0].add(j)
  }

  // start moving
  towers[0].moveDisks(numberOfDisks, towers[2], towers[1]);

  // check the result in console
  return towers;

}

function Tower(num) {
  this.disks = [];     // take the record of disks
  this.index = num;    // just to prove that we move
}

Tower.prototype.moveTopTo = function(anotherTower) {
  const top = this.disks.pop();      // move the button "biggest" one
  anotherTower.add(top);             // move it to the destination
}

Tower.prototype.moveDisks = function(num, destination, buffer) {
  //console.log(num)
  if (num > 0) {   // keep tracking the number of disks virtually

    // move n - 1 to buffer
    this.moveDisks(num - 1, buffer, destination);
    // move n to destination
    this.moveTopTo(destination);  // it is "here" where we move a disk

    // move n -1 to destination
    buffer.moveDisks(num - 1, destination, this)
  }
}

Tower.prototype.add = function(num) {
  this.disks.push(num);
}

console.log(hanoiTower());
