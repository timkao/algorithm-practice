/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTreesWithMap = function(n) {
  if (n === 0) {
      return [];
  }
  const memo = new Map();
  return generateTreesImpl(1, n, memo);
};

function generateTreesImpl(low, high, memo) {
  if (low > high) {
      return [null];
  }
  if (low === high) {
      return [new TreeNode(low)];
  }
  if (memo.has(low) && memo.get(low).has(high)) {
      return memo.get(low).get(high);
  }

  let combinations = [];
  for (let i = low; i <= high; i += 1) {
      const left = generateTreesImpl(low, i - 1, memo);
      const right = generateTreesImpl(i + 1, high, memo);
      for (let j = 0; j < left.length; j += 1) {
          for (let k = 0; k < right.length; k += 1) {
              const node = new TreeNode(i);
              node.left = left[j];
              node.right = right[k];
              combinations.push(node);
          }
      }
  }

  if (!memo.has(low)) {
      memo.set(low, new Map());
  }
  memo.get(low).set(high, combinations);
  return combinations;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return []
  const store = []
  for (var i = 1; i <= n; i++) {
      store[i] = []
  }
  return buildTrees(1, n, store)
};

function buildTrees(start, end, memo) {
  if (start > end ) return [null]
  if (memo[start][end] !== undefined) return memo[start][end]
  const result = []
  for (var i = start; i <= end; i++) {
      const left = buildTrees(start, i - 1, memo)
      const right = buildTrees(i + 1, end, memo)
      for (var j = 0; j < left.length; j++) {
          for (var k = 0; k < right.length; k++) {
              const newNode = new TreeNode(i)
              newNode.left = left[j]
              newNode.right = right[k]
              result.push(newNode)
          }
      }

  }
  memo[start][end] = result
  return memo[start][end]
}

