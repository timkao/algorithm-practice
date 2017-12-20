function magicIndex(arr, prev) {
  if (arr.length === 0) { return false; }
  if (prev === undefined ) { prev = 0;}

  let currMid;
  if (arr.length % 2 === 0) {       // when the lenght is only two, we want to make sure we start from 0
    currMid = (arr.length / 2) - 1
  } else {
    currMid = Math.floor(arr.length / 2);
    // when the length is only one, we want to make sure we start from 0;
  }

  const realMid = currMid + prev

  if (arr[currMid] === realMid) {
    return realMid
  }

  const rightSearch = magicIndex(arr.slice(currMid + 1, arr.length), realMid + 1);
  if (rightSearch !== false) {
    return rightSearch;
  }

  const leftSearch = magicIndex(arr.slice(0, currMid));
  if (leftSearch !== false) {
    return leftSearch;
  }

  return false;

}

console.log(magicIndex([-8, 0, 1, 3]))
console.log(magicIndex([3, 3, 3, 3, 3]))
console.log(magicIndex([1, 1, 1, 1, 1, 1]))
