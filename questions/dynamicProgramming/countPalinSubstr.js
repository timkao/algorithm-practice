/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let ans = 0
    for (let i = 0; i < s.length; i++) {
      checkPalin(s, i, i)
      checkPalin(s, i, i + 1)
    }
    return ans

    function checkPalin(str, left, right) {
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        ans += 1
        left -= 1
        right += 1
      }
    }
};
