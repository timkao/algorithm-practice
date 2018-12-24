function SuffixTrie(str) {
  this.root = {}
  const newStr = str + '$'
  for (var i = 0; i < newStr.length; i++) {
    const curStr = newStr.slice(i)
    insertStr(this.root, curStr)
  }
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

const ex = new SuffixTrie('mississippi')
