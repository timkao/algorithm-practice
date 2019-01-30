/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLengthOpt = function(A, B) {
  var m = A.length;
    var n = B.length;
    if (m * n === 0) return 0;
    var dp = [];
    var max = 0;
    for (var i = 0; i <= m; i++) {
        dp.push(new Array(n + 1).fill(0));
    }

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            dp[i][j] = A[i - 1] === B[j - 1] ? dp[i - 1][j - 1] + 1 : 0;
            max = Math.max(max, dp[i][j]);
        }
    }
    return max;
};

var findLength = function(A, B) {
  const dp = []
  let globalMax = 0
  const BIdxMap = generateMap(B)
  for (let i = 0; i < A.length; i++) {
      const memo = []
      const currNum = A[i]
      const matchIdxes = BIdxMap[currNum]
      if (matchIdxes !== undefined) {
          for (let j = 0; j < matchIdxes.length; j++) {
              const currIdx = matchIdxes[j]
              if (i === 0) {
                  memo[currIdx] = 1
              } else {
                  const prevMemo = dp[i - 1]
                  if (prevMemo[currIdx - 1] !== undefined) {
                      memo[currIdx] = prevMemo[currIdx - 1] + 1
                  } else {
                      memo[currIdx] = 1
                  }
              }
              if (globalMax < memo[currIdx]) globalMax = memo[currIdx]
          }
      }
      dp[i] = memo
  }
  return globalMax
};


function generateMap(arr) {
  const result = []
  arr.forEach((num, idx) => {
      if (result[num] === undefined) {
          result[num] = [idx]
      } else {
          result[num].push(idx)
      }
  })
  return result
}
