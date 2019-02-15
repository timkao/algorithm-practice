/*
In the previous approach we can see that many subproblems were redundant,
i.e we were calling the recursive function multiple times
for the same substring appearing through multiple paths. To avoid this we can use memorization method,
where we are making use of a hashmap to store the results
in the form of a key:value key:value pair. In this hashmap,
the key used is the starting index of the string currently considered and the value contains all the sentences which can be formed using the substring from this starting index onwards.
Thus, if we encounter the same starting index from different function calls,
we can return the result directly from the hashmap rather than going for redundant function calls.

With memorization many redundant subproblems are avoided and recursion tree is pruned and thus it reduces the time complexity by a large factor.

*/

var wordBreak = function(s, wordDict) {
  if (wordDict.length === 0) return []
  const map = {}
  const memo = {}
  wordDict.forEach(word => {
      if (map[word] === undefined) map[word] = true
  })
  const result = findMatch(s, map, memo, 0)
  //console.log(memo)
  return result
};

function findMatch(str, dict, memo, start) {
  if (memo[start] !== undefined) return memo[start]

  const res = []
  for (let i = start + 1; i <= str.length; i++) {
      const subStr = str.slice(start, i)
      if (dict[subStr] === true) {
        if (i === str.length) {
          res.push(subStr)
        }

        const temp = findMatch(str, dict, memo, i)
        for (let j = 0; j < temp.length; j++) {
          res.push(subStr + ' ' + temp[j])
        }


      }
  }
  memo[start] = res
  return res
}

console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]))
