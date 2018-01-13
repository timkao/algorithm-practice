/*
  interview question 8.9
*/
function parens (n) {
  let coll = []

 	 function build (l = 0, r = 0, partial = '') {
    console.log('left: ', l)
    console.log('right: ', r)
    console.log('partial: ', partial)
    if (l === n && r === n) return coll.push(partial)
    if (l < n) build(l + 1, r, `${partial}(`)
    if (r < l) build(l, r + 1, `${partial})`)
  	}

  build()

  return coll
}


//console.log(parens(3))


function parens2(num, left = 0, right = 0, prefix = '', result = []) {

  if (left === num && right === num) {
    result.push(prefix);
    return
  }

  if (left < num) { parens2(num, left + 1, right, prefix + '(', result) }
  if (right < left) { parens2(num, left, right + 1, prefix + ')', result)}

  return result

}

console.log(parens2(3))
