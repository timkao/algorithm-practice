/*
  interview questions 1.1
  you have a string. Check if all characteristics in the string are unqiue
*/


function isUnique(str) {
  if (str.length > 128) return false;
  const asciiTable = {};
  for (var i = 0; i < str.length; i++) {
    if (asciiTable[str.charCodeAt(i)]) {
      return false
    } else {
      asciiTable[str.charCodeAt(i)] = str[i];
    }
  }
  return true;
}

/*
  testing case
*/

console.log(isUnique('algorithm'));
console.log(isUnique('fullstack'));
console.log(isUnique('peggy'));

/*
  efficiency
  space: O(N)
  time: O(1) or O(128)
*/
