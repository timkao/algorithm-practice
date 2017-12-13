/*
  interview quesitons 1.3
*/

function urlify(str, len) {
  let result = '';
  for (let i = 0; i < len ; i++) {
    if (str[i] !== ' ') {
      result += str[i]
    } else {
      result += '%20'
    }
  }
  return result;
}

/*
  testing case
*/

console.log(urlify('Mr John Smith        ', 13));


/*
  efficiency
  space: O(len + 2 * number of spaces)
  time: O(len + 2 * number of spaces)
*/
