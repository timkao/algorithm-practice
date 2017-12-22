/*
  fibonacci (recursion)

  f(0) = 0          ==> base case
  f(1) = 1          ==> base case
  f(2) = f(1) + f(0)
  f(3) = f(2) + f(1)
  f(4) = f(3) + f(2)
  f(n) = f(n -1) + f(n - 2)
*/

function fib(n, memo = []) {
  if (n === 0) {return 1}
  if (n === 1) {return 1}
  if (memo[n] !== undefined) { return memo[n]}
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(100));



/*
  triple steps (recursion)
  to n - 1 and 1 stair for the last time
  to n - 2 and 2 stairs for the last time
  to n - 3 and 3 stairs for the last time
  The advantage of this approach is to prevent duplication since the last step is always different

  f(5) = f(4) + f(3) + f(2)
  f(4) = f(3) + f(2) + f(1)
  f(3) = f(2) + f(1) + f(0)
  f(2) = f(1) + f(0) + f(-1)
  f(1) = 1
  f(0) = 1
*/

function tripleSteps(nSteps, memo = []) {
  if (nSteps === 1) {return 1}
  if (nSteps === 0) {return 1}
  if (nSteps < 0) {return 0}
  if (memo[nSteps] !== undefined) {return memo[nSteps]}
  memo[nSteps] = tripleSteps(nSteps - 1, memo) + tripleSteps(nSteps - 2, memo) + tripleSteps(nSteps - 3, memo)

  return memo[nSteps]
}

console.log(tripleSteps(10))

/*
  robot walk (recursion)
  a grid is actually similar to a binary tree.
  in this case, the tree has some nodes whose value is "false", which we should not take
  therefore, the key is to try every path to the target and aviod the "false" and record the "path" we took
*/

const grid = [
  [true, false, true],
  [true, true, true],
  [true, true, false],
  [false, true, true],
  [true, true, true]
  ];

function robotWalks(maze, rows, cols, path, failedPath = []) {

  // base case
  if (rows < 0 || cols < 0 || maze[rows][cols] === false) {
    failedPath.push([rows, cols]);
    return false
  }

  for (var i = 0; i < failedPath.length; i++) {
    if (failedPath[i][0] === rows && failedPath[i][1] === cols) {
      return false;
    }
  }

  let isOrigin = false;
  if (rows === 0 && cols === 0) { isOrigin = true }  // it is critical to have isOrigin. without it, every path will return false

  if (isOrigin || robotWalks(maze, rows - 1, cols, path, failedPath) || robotWalks(maze, rows, cols - 1, path, failedPath)) {
    path.push([rows, cols])
    return true;
  }

}

/*
  since robotWalks only returns true or false and what we want is "path",
  we create another function outside robotWalks to help us return "path"
*/

function findingPath(maze, path = []) {
  if (maze.length === 0 || maze[0].lenght === 0) { return []}
  let rows = maze.length - 1;
  let cols = maze[0].length - 1;

  if (robotWalks(maze, rows, cols, path)) {
    return path;
  }
  return false;

}

console.log(findingPath(grid));

/*
  magicIndex (recursion)
  to be faster than iteration from beginning.
  you should use binary search
*/

function magicIndex(arr, prevMid = 0) {
  if (arr.length === 0) {return false}

  let currMid;
  if (arr.length % 2 === 1) {
    currMid = Math.floor(arr.length / 2);
  } else {
    currMid = (arr.length / 2) - 1;
  }

  let trueMid = currMid + prevMid;

  if (arr[currMid] === trueMid ) {
    return arr[currMid];
  } else if (arr[currMid] < trueMid) {
    return magicIndex(arr.slice(0, currMid));
  } else {
    return magicIndex(arr.slice(currMid + 1, arr.length), trueMid + 1)
  }


}


console.log(magicIndex([-8, 0, 1, 3]))
console.log(magicIndex([0, 0, 0, 1, 4, 66, 66, 66]))
console.log(magicIndex([1, 1, 1, 1, 1, 1]))
console.log(magicIndex([1, 2, 3, 5, 5]))



/*
  powerSet (recursion)
  [] => [[]]
  [1] => [[], [1]]
  [1, 2] => [[], [1], [2], [2, 1]]
  [1, 2, 3] => [[], [1], [2], [2, 1], [3], [1, 3], [2, 3], [2, 1, 3]]
  [...n] => [....n-1] + ([...n-1] + n)
*/

function powerSet(arr, acc = [[]]) {
  if (arr.length === 0) {return acc}
  let len = acc.length
  for (var i = 0; i < len; i++) {
    let newEle = acc[i].slice(0);

    newEle.push(arr[0]);
    acc.push(newEle);
  }
  arr.shift();
  return powerSet(arr, acc);
}
console.log(powerSet([1, 2, 3]));
