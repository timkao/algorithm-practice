const assert = require('assert')


function SuffixTrie(str) {
  this.root = {}
  const newStr = str + '$'
  for (var i = 0; i < newStr.length; i++) {
    const curStr = newStr.slice(i)
    insertStr(this.root, curStr)
  }
}

SuffixTrie.prototype.isSubStr = function(str, currNode = this.root) {
  if (str.length === 0) return true
  const currChar = str[0]
  if (currNode[currChar] === undefined) return false
  if (currNode[currChar] !== undefined) return this.isSubStr(str.slice(1), currNode[currChar])
}

SuffixTrie.prototype.isSuffix = function(str, currNode = this.root) {
  if (str.length === 0) return currNode['$'] !== undefined
  const currChar = str[0]
  if (currNode[currChar] === undefined) return false
  if (currNode[currChar] !== undefined) return this.isSuffix(str.slice(1), currNode[currChar])
}

SuffixTrie.prototype.subStrRepeatTimes = function(str, currNode = this.root) {
  if (str.length === 0) {
    return findLeaves(currNode)
  }
  const currChar = str[0]
  if (currNode[currChar] === undefined) return 0
  if (currNode[currChar] !== undefined) return this.subStrRepeatTimes(str.slice(1), currNode[currChar])
}

SuffixTrie.prototype.longestRepeatSubstr = function(currNode = this.root, temp = '') {
  const leafNums = findLeaves(currNode)
  if (leafNums <= 1) return temp.slice(0, temp.length - 1)

  const children = Object.keys(currNode)
  let result = ''
  for (var i = 0; i < children.length; i++) {
    const currChar = children[i]
    const nextNode = currNode[currChar]
    const subStr = this.longestRepeatSubstr(nextNode, temp + currChar)
    if (subStr.length > result.length) {
      result = subStr
    }
  }
  return result
}

function insertStr(root, str) {
  if (str.length === 0) return
  const curChar = str[0]
  if (root[curChar] === undefined) {
    root[curChar] = {}
    insertStr(root[curChar], str.slice(1))
  } else {
    insertStr(root[curChar], str.slice(1))
  }
}

function findLeaves(node) {
  const children = Object.keys(node)
  if (children.length === 0) return 1
  let result = 0
  for (var i = 0; i < children.length; i++) {
    result += findLeaves(node[children[i]])
  }
  return result
}

const ex = new SuffixTrie('mississipi')
assert.equal(ex.isSubStr('sip'), true)
assert.equal(ex.isSuffix('sip'), false)
assert.equal(ex.subStrRepeatTimes('issi'), 2)
assert.equal(ex.subStrRepeatTimes('ss'), 2)
assert.equal(ex.subStrRepeatTimes('i'), 4)
assert.equal(ex.longestRepeatSubstr(), 'issi')

