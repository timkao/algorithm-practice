function Trie(words) {
  this.root = {}
  words.forEach(word => {
    word += '$'
    this.insert(word)
  })
}

Trie.prototype.insert = function(word) {
  let currNode = this.root
  for (var i = 0; i < word.length; i++) {
    const letter = word[i]
    if (currNode[letter] === undefined) {
      currNode[letter] = {}
    }
    currNode = currNode[letter]
  }
}

Trie.prototype.hasWord = function(word) {
  let currNode = this.root
  for (var i = 0; i < word.length; i++) {
    const letter = word[i]
    if (currNode[letter] === undefined) return false
    currNode = currNode[letter]
  }
  if (currNode['$'] !== undefined) return true
  return false
}

Trie.prototype.beginWith = function(prefix) {
  let currNode = this.root
  for (var i = 0; i < prefix.length; i++) {
    const letter = prefix[i]
    if (currNode[letter] === undefined) return []
    currNode = currNode[letter]
  }
  const children = constructChildren(currNode, prefix)
  return children
}

function constructChildren(node, prefix, acc = '', result = []) {
  const children = Object.keys(node)
  if (children.length === 0) {
    result.push(prefix + acc)
    return
  }
  children.forEach(letter => {
    if (letter !== '$') {
      constructChildren(node[letter], prefix, acc + letter, result)
    } else {
      constructChildren(node[letter], prefix, acc, result)
    }
  })
  return result
}


const example = new Trie(['leet', 'code', 'friday', 'leetcode', 'fire', 'codeem', 'leetcba', 'leetcoce', 'leetcod'])
console.log(example.beginWith('leet'))

module.exports = Trie
