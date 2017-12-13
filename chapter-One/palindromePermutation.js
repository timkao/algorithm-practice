/*
  interview quesitons 1.4
*/

function palindromePermutation(str) {
  const table = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const charAscii = char.charCodeAt(0);
    if (charAscii >= 97 && charAscii <= 122) {
      if (!table[char]) {
        table[char] = 1;
      } else {
        table[char]++;
        if (table[char] === 2) {
          table[char] = 0;
        }
      }
    }
  }

  let test = 0;
  const tempArr = Object.keys(table);
  for (let j = 0; j < tempArr.length; j++) {
    if (table[tempArr[j]] !== 0) {
      test++
      if (test > 1) {
        return false;
      }
    }
  }
  return true;
}

/*
  testing case
*/

console.log(palindromePermutation('Tact Coa'));

/*
  efficiency
  space: O(2N)
  time: O(2N)
*/
