/*
  interview question 4.9
*/

function Tree(value) {
  this.value = value
  this.left = null;
  this.right = null;
}

const Twenty = new Tree(20);
const Ten = new Tree(10);
const Thirty = new Tree(30);
const Five = new Tree(5);
const Fifteen = new Tree(15);
const Forty = new Tree(40);

Twenty.left = Ten;
Twenty.right = Thirty;
Ten.left = Five;
Ten.right = Fifteen;
Thirty.right = Forty;

function allSequence(node) {
  let result = [];
  if (node === null) {
    result.push([]);
    return result;
  }

  const prefix = [];
  prefix.push(node.value)

  const leftSeb = allSequence(node.left); // in the shape of [[], [], ....]
  const rightSeb = allSequence(node.right); // in the shape of [[], [], ....]

  for (let left of leftSeb) {   // every left and right should weave with each other
    for (let right of rightSeb) {
      let weaved = [];
      console.log('left: ', left)
      console.log('right: ', right)
      console.log('prefix: ', prefix)
      weaveLists(left, right, weaved, prefix);
      result = result.concat(weaved);  // record the result
      console.log('result: ', result)  // will be helpful to understand the process
      console.log('---------')
    }
  }
  return result;
}

function weaveLists(first, second, results, prefix) {
  if (first.length === 0 || second.length === 0) {
    let result = prefix.slice(0); // keep the prefix reference
    result = result.concat(first); // because "allSequence" create the subtree from top down, therefore parents will always come before child!
    result = result.concat(second); // so we can just "concat"
    results.push(result); // record the result
    return;
  }
  // the first one will always go first to the prefix, hence keep the order
  const headFirst = first.shift();
  prefix.push(headFirst);
  weaveLists(first, second, results, prefix);
  // back to the previous state before proceed to the right
  prefix.pop();
  first.unshift(headFirst);

  const headSecond = second.shift();
  prefix.push(headSecond);
  weaveLists(first, second, results, prefix);
  prefix.pop();
  second.unshift(headSecond);
}

/*
  check if "weaveLists" works
*/
let checkWeaving = [];
weaveLists([1, 2], [3, 4], checkWeaving, []);
console.log(checkWeaving);


/*
  testing case
*/

console.log(allSequence(Twenty));






