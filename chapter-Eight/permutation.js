/*
  interview quesiton 8.7
*/


/*
  solution 1 (my own concept which is similar to the first concept of the book)
*/

function permutation(str, acc = []) {

  if (str.length === 0) { return acc }
  const currChar = str.slice(str.length - 1, str.length);
  const newAcc = [];

  for (let i = 0; i < acc.length; i++ ) {
    const currComb = acc[i];
    for (let j = 0; j < currComb.length + 1; j++) {
      const prevSlice = currComb.slice(0, j);
      const nextSlice = currComb.slice(j, currComb.length);
      const tempStr = '' + prevSlice + currChar + nextSlice;
      newAcc.push(tempStr);
    }
  }

  if (acc.length === 0) {
    newAcc.push(currChar);
  }
  return permutation(str.slice(0, str.length - 1), newAcc)

}

console.log(permutation('abcd'));

/*
  solution 2 (according to the second concept in the book)
*/

function permutation2(str, result = []) {
  if (str.length === 0) { return [''] }
  for (var i = 0; i < str.length; i++) {
    const restPart = str.slice(0, i) + str.slice(i+1, str.length);
    const prevPermu = permutation2(restPart)
    for (var j = 0; j < prevPermu.length; j++) {
      const tempComb = str[i] + prevPermu[j];
      result.push(tempComb);
    }
  }
  return result;
}

console.log(permutation2('abcd'))

