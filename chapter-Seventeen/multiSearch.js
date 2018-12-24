const SuffixTrie = require('../data-structure/suffixTrie')

const wordEx = 'mississippi'
const subStrsEx = ['is', 'ppi', 'hi', 'sis', 'i', 'ssippi']

function multiSearch(subStrs, word) {
  const suffixT = new SuffixTrie(word)
  return subStrs.map(str => suffixT.isSubStr(str))
}

console.log(multiSearch(subStrsEx, wordEx))

