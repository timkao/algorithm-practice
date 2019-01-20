var longestPalindrome = function(s) {

  if (s.length === 1 || s.length === 0) {
    return false
  }

  let memo = {
    begin: 0,
    end: 0
  };
  for (var i = 0; i < s.length; i++) {
    findPalindrome(s, i, i, memo);
    findPalindrome(s, i, i + 1, memo);
  }
  return s.slice(memo.begin, memo.end + 1)
};


function findPalindrome(str, left, right, memo) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  if ((right - 1) - (left + 1) > memo.end - memo.begin) {
    memo.begin = left + 1;
    memo.end = right - 1;
  }

}

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("aabb"))
console.log(longestPalindrome("cbbd"))

