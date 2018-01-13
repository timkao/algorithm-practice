

function routeBetweenN(nodeOne, nodeTwo, memo = []) {
  if (nodeOne === nodeTwo) {
    return true;
  }
  if (memo.includes[nodeOne] || nodeOne.neighbors.length === 0) {
    return false;
  }
  memo.push(nodeOne);

  while (nodeOne.neighbors.length !== 0) {
    const next = nodeOne.neighbors.pop();
    if (routeBetweenN(next, nodeTwo, memo)) {
      return true;
    }

  }

}

function miniTree(arr) {
  if (arr.length === 0) {
    return null
  }

  let midPoint;
  if (arr.length % 2 === 0) {
    midPoint = (arr.length / 2) - 1
  } else {
    midPoint = arr.length >> 1;
  }

  const resultTree = new Tree(arr[midPoint]);
  resultTree.left = miniTree(arr.slice(0, midPoint))
  resultTree.right = miniTree(arr.slice(midPoint + 1, arr.length))

  return resultTree;

}


function listDepth(tree, level = 0, result = []) {

  if (tree === null) {
    return result;
  }

  if (result[level] === undefined) {
    result[level] = new LinkedList();
    result[level].addToTail(tree.value);

  } else {
    result[level].addToTail(tree.value);
  }

  level++;

  listDepth(tree.left, level, result);
  listDepth(tree.right, level, result);
  return result;

}

function balanced(tree) {

  if (tree === null) {
    return true;
  }

  const dif = Math.abs(checkHeight(tree.left) - checkHeight(tree.right))
  if (dif > 1) {
    return false;
  }
  return balanced(tree.left) && balanced(tree.right);

}

function checkHeight(tree, height = 0) {
  if (tree === null) {
    return height;
  }
  if (tree.height !== undefined) {
    return tree.height;
  }

  height++
  const leftHeight = checkHeight(tree.left, height);
  const rightHeight = checkHeight(tree.right, height);
  tree.height = Math.max(leftHeight, rightHeight);
  return tree.height;
}


function vBST(tree, max = null, min = null) {
  if (tree === null) {
    return true;
  }

  if (max !== null && tree.value > max) {
    return false;
  }
  if (min !== null && tree.value <= min) {
    return false;
  }
  return vBST(tree.left, tree.value, min) && vBST(tree.right, max, tree.value)

}

function successor(tree) {
  if (tree.right !== null) { return leftMost(tree.right)}
  if (tree.parent.left === tree) { return tree.parent}
  return checkParent(tree.parent);
}

function leftMost(tree) {
  if (tree.left === null) { return tree }
  else { return leftMost(tree.left)}
}

function checkParent(tree) {
  if (tree.parent.left === tree) { return tree.parent}
  else { return null}
}


function weave2Arr(arr1, arr2, result = [], buff = []) {
  if (arr1.length === 0 || arr2.length === 0) {
    let temp = buff.slice(0);
    temp = temp.concat(arr1);
    temp = temp.concat(arr2);
    result.push(temp);
    return;
  }

  // treat arr1 and arr2 as "queue"
  let fromArr1 = arr1.shift();
  buff.push(fromArr1);
  weave2Arr(arr1, arr2, result, buff);
  arr1.unshift(fromArr1);
  buff.pop();

  let fromArr2 = arr2.shift();
  buff.push(fromArr2);
  weave2Arr(arr1, arr2, result, buff);
  arr2.unshift(fromArr2);
  buff.pop();
}

let checkWeaving = [];
weave2Arr([1, 2], [3, 4], checkWeaving);
console.log(checkWeaving);

function getSize(tree, cum = 0) {
  if (tree === null) {
    return cum;
  }
  cum++
  return cum + getSize(tree.left) + getSize(tree.right);
}
