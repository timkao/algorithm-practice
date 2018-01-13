var lengthOfLongestSubstring = function(s) {
  // keep a table and an array
  const table = {};
  let result = 0;
  let tempLength = 0
  let beginIndex = 0;
  for ( var i = 0; i < s.length; i++) {

    // keep track of index table in case we cannot use indexOf
    if (table[s[i]] === undefined) {
      table[s[i]] = i;
    } else {
      // update the index and summarize the length
      tempLength = i - beginIndex;
      if (tempLength > result) {
        result = tempLength;
      }
      if (beginIndex <= table[s[i]]) {
        beginIndex = table[s[i]] + 1;
      }
      table[s[i]] = i;
    }

    if ( i === s.length - 1) {
      tempLength = i - beginIndex + 1;
      if (tempLength > result) {
        result = tempLength
      }
    }

  }

  return result
};

console.log(lengthOfLongestSubstring('ac'));  // 2
console.log(lengthOfLongestSubstring('dvdf'));  // 3
console.log(lengthOfLongestSubstring('anviaj')); // 5
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('cdd')); // 2
console.log(lengthOfLongestSubstring('abba')); // 2

