/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLengthOpt = function(arr1, arr2) {
    var arr = [];
    var n = arr1.length;
    var m = arr2.length;
    var maxLen = Number.MIN_SAFE_INTEGER;

    for (var i = 0; i < n; i++) {
        var newArr = new Array(m);
        newArr.fill(0);
        arr.push(newArr);
    }

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (arr1[i] === arr2[j]) {
                if (i == 0 || j == 0) {
                    arr[i][j] = 1;
                } else {
                    arr[i][j] = arr[i-1][j-1] + 1;
                }
                maxLen = Math.max(maxLen, arr[i][j]);
            } else {
                arr[i][j] = 0;
            }
        }
    }

    return maxLen === Number.MIN_SAFE_INTEGER ? 0 : maxLen;
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
