/*
  interview question 1.9
*/


function stringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const testStr = str1 + str1;

  return isSubString(testStr, str2);
}

function isSubString(testStr, str) {
  for (let i = 0; i < testStr.length; i++) {
    if (testStr[i] === str[0]) {
      for (let j = 1; j < str.length; j++) {
        if (testStr[i + j] !== str[j]) {
          break
        }
        return true;
      }
    }
  }
  return false;
}

/*
  testing case
*/

console.log(stringRotation('waterbottle', 'erbottlewat'));
console.log(stringRotation('waterbottle', 'bittebottle'));

/*
  efficiency
  space: O(1)
  time: O(NN)
*/
