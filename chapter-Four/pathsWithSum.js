/*
  interview question 4.12
*/

function Tree(value) {
  this.value = value
  this.left = null;
  this.right = null;
}

const Five = new Tree(5);
const Three = new Tree(3);
const _Five = new Tree(5);
const Six = new Tree(6);
const Seven = new Tree(7);
const Ten = new Tree(10);
const minusOne = new Tree(-1);
const Zero = new Tree(0);

Five.left = Seven;
Seven.left = _Five;
Five.right = Three;
Three.left = Ten;
Three.right = Six;
Ten.left = minusOne;
_Five.left = Zero;


/*
  solution 1 use object for easier count operation in recursion
*/

function pathsWithSum(root, target, countObject = {paths: 0}, prevSum = 0) {
  if (root === null ) { return }
  let currSum = root.value + prevSum;
  if (currSum === target) { countObject.paths++ }

  pathsWithSum(root.left, target, countObject)
  pathsWithSum(root.left, target, countObject, currSum)
  pathsWithSum(root.right, target, countObject)
  pathsWithSum(root.right, target, countObject, currSum)
  return countObject.paths

}

console.log(pathsWithSum(Five, 12))


/*
  solution 2 how to count in recursion
*/


function pathsWithSum2(root, target, prevSum = 0) {

  if (root === null ) { return 0 }
  let count = 0;
  let currSum = root.value + prevSum;
  if (currSum === target) { count++ }

  count += pathsWithSum2(root.left, target)
  count += pathsWithSum2(root.left, target, currSum)
  count += pathsWithSum2(root.right, target)
  count += pathsWithSum2(root.right, target, currSum)
  return count

}

console.log(pathsWithSum2(Five, 12))


/*
  Efficiency:
  time: O(NlogN) for balanced Tree
  time: N^2 for 100% unbalanced Tree
  space: N^2 (4 ^ logN)

*/

/*
  solution 3 optimization (check the book page 274 for detail explanation! simple math but super smart to come out of it!)
*/

function countPathsWithSum(root, target, runningSum = 0, memo = {}) {
  if (root === null) { return 0 }
  runningSum += root.value;      // keep tracking runningSum which will be recorded in our memo
  let sum = runningSum - target; // keep updating sum which will influence the "totalPaths"
  let totalPaths;
  if (memo[sum] !== undefined) {
    totalPaths = memo[sum];
  } else {
    totalPaths = 0;
  }

  if (runningSum === target) {  // if the runningSum itself is an answer, we shoul add one since it is not included in memo
    totalPaths++
  }

  manageCount(memo, runningSum, true) // update the memo
  totalPaths += countPathsWithSum(root.left, target, runningSum, memo);
  totalPaths += countPathsWithSum(root.right, target, runningSum, memo);
  manageCount(memo, runningSum, false) // remove the current runningSum before going back to the upper level
                                      //  since the upper level should not have access to the "runninigSum" of lower level!
  return totalPaths;

}

function manageCount(memo, runningSum, isIncrease) {
  let newCount;
  if (memo[runningSum] !== undefined) {
    newCount = memo[runningSum];
  } else {
    newCount = 0;
  }

  if (isIncrease) {
    newCount++
  } else {
    newCount--
  }
  memo[runningSum] = newCount;
}

console.log(countPathsWithSum(Five, 12))


/*
  Efficiency:
  time: O(N) for all
  space: O(logN) for balanced tree and O(N) for unbalanced tree

*/

