/*
  interview question 10.10
*/

// 1, 3, 4, 4, 5, 5, 7, 9, 13

function RankStream() {
  this.rank = [];
  this.origin = [];
}

RankStream.prototype.generate = function(value) {
  this.origin.push(value);
  this.track(value)
}

RankStream.prototype.track = function(value) {
  if (this.rank.length === 0) {
    this.rank.push(value)
  } else if (this.rank[this.rank.length - 1] < value) {
    this.rank.push(value);
  } else {
    let index = 0;
    while (this.rank[index] < value) {
      index++
    }
    this.rank.splice(index, 0, value)
  }
}

RankStream.prototype.getRankOfNumber = function(value) {

  /*
    binary search approach
  */
  let tempResult = binarySearchClosest(this.rank.slice(0), value)
  if (this.rank[tempResult] > value) {
    while (this.rank[tempResult] > value) {
        tempResult--
    }
    return tempResult + 1;
  } else if (this.rank[tempResult] === value) {
    while (this.rank[tempResult + 1] !== undefined && this.rank[tempResult + 1] === value) {
      tempResult++
    }
    return tempResult
  } else {
    while (this.rank[tempResult] < value) {
      tempResult++
    }
    return tempResult
  }

}

function binarySearchClosest(arr, target, left = 0) {

  let mid = arr.length % 2 === 0 ? (arr.length / 2) - 1 : arr.length >> 1;

  if (arr.length === 1 && arr[mid] !== target) {
    return left + mid;
  }

  if (arr.length === 2 && arr[mid] !== target) {
    if (arr[mid] > target) {
      return mid + left
    } else {
      return mid + 1 + left
    }
  }

  if (arr[mid] === target) {
    return left + mid
  } else if (arr[mid] > target) {
    return binarySearchClosest(arr.slice(0, mid), target, left);
  } else {
    return binarySearchClosest(arr.slice(mid + 1, arr.length), target, left + mid + 1)
  }
}

const testStream = new RankStream();
testStream.generate(5);
testStream.generate(1);
testStream.generate(4);
testStream.generate(4);
testStream.generate(5);
testStream.generate(9);
testStream.generate(7);
testStream.generate(13);
testStream.generate(3);

console.log(testStream.getRankOfNumber(1))
console.log(testStream.getRankOfNumber(3))
console.log(testStream.getRankOfNumber(4))
console.log(testStream.getRankOfNumber(5))
console.log(testStream.getRankOfNumber(8))
console.log(testStream.getRankOfNumber(14))



