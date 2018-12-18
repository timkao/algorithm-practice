function Node(num) {
  this.value = num
  this.left = null
  this.right = null
  this.converted = false
  this.parent = null
}

const one = new Node(1)
const five = new Node(5)
const seven = new Node(7)
const eight = new Node(8)
const ten =  new Node(10)
const twelve = new Node(12)
const fifteen = new Node(15)
const thirtySix = new Node(36)
const forty = new Node(40)

twelve.left = eight
twelve.right = thirtySix
eight.left = five
eight.right = ten
five.left = one
five.right = seven
thirtySix.left = fifteen
thirtySix.right = forty

eight.parent = twelve
five.parent = eight
one.parent = five
seven.parent = five
ten.parent = eight
thirtySix.parent = twelve
fifteen.parent = thirtySix
forty.parent = thirtySix

function biNode(root) {
  if (root.left !== null && root.left.converted === false) {
    biNode(root.left)
  }
  if (root.right !== null && root.right.converted === false) {
    biNode(root.right)
  }
  convert(root)
  return root
}

function convert(root) {
  root.left = findBiggestLeft(root)
  root.right = findSmallestRight(root)
  root.converted = true
}

function findBiggestLeft(root) {
  if (root.left === null) {
    if (root.parent.parent !== null && root.parent.parent.value < root.value) {
      return root.parent.parent
    } else if (root.parent !== null && root.parent.value < root.value) {
      return root.parent
    }
    return null
  } else {
    return findMostRight(root.left, root)
  }
}

function findSmallestRight(root) {
  if (root.right === null) {
    if (root.parent !== null && root.parent.value > root.value) {
      return root.parent
    } else if (root.parent.parent !== null && root.parent.parent.value > root.value) {
      return root.parent.parent
    }
    return null
  } else {
    return findMostLeft(root.right)
  }
}

function findMostLeft(root) {
  if (root.left === null) return root
  if (root.parent !== null && root.parent !== undefined && root.left.value === root.parent.value) return root
  if (root.parent.parent !== null && root.parent.parent !== undefined && root.left.value === root.parent.parent.value) return root
  return findMostLeft(root.left)
}

function findMostRight(root) {
  if (root.right === null) return root
  if (root.parent !== null && root.parent !== undefined && root.right.value === root.parent.value) return root
  if (root.parent.parent !== null && root.parent.parent !== undefined && root.right.value === root.parent.parent.value) return root
  return findMostRight(root.right)
}



biNode(twelve)

console.log(one.left)
console.log(one.right.value)

console.log(five.left.value)
console.log(five.right.value)

console.log(seven.left.value)
console.log(seven.right.value)

console.log(eight.left.value)
console.log(eight.right.value)

console.log(ten.left.value)
console.log(ten.right.value)

console.log(twelve.left.value)
console.log(twelve.right.value)

console.log(fifteen.left.value)
console.log(fifteen.right.value)

console.log(thirtySix.left.value)
console.log(thirtySix.right.value)

console.log(forty.left.value)
console.log(forty.right)
