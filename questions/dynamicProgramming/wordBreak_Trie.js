const Trie = require('../../data-structure/trie')

var wordBreak = function(s, wordDict) {
  if (s.length === 0) return true
  const trie = new Trie(wordDict)
  let nodes = new Set([trie.root])
  for (var i = 0; i < s.length; i++) {
    const letter = s[i]
    const nextNodes = new Set()
    nodes.forEach(node => {
      if (node[letter] !== undefined) {
        nextNodes.add(node[letter])
        if (node[letter]['$'] !== undefined) {
          nextNodes.add(trie.root)
        }
      }
    })
    nodes = nextNodes
  }

  let hasEnd = false
  nodes.forEach(node => {
    if (node['$'] !== undefined) {
      hasEnd = true
    }
  })
  return hasEnd
};

console.log(wordBreak('leetcode', ['leet', 'code', 'leetcod']));
