/*
  interview questions 1.2
*/

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] ) {
      return false;
    }
  }
  return true;

}

/*
  testing case
*/

console.log(checkPermutation('abc', 'cba'));  // true
console.log(checkPermutation('timkao', 'kaotim'));  // true
console.log(checkPermutation('timmkaoo', 'tiimkaao'));  // false
console.log(checkPermutation('god     ', 'dog'));  // false

/*
  efficiency
  space: O(N)
  time: O(NlogN)
*/


/*
  solution 2
*/

function checkPermutation2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const table1 = {};
  const table2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (!table1[str1[i]]) {
      table1[str1[i]] = 1;
    } else {
      table1[str1[i]]++
    }
    if (!table2[str2[i]]) {
      table2[str2[i]] = 1;
    } else {
      table2[str2[i]]++
    }
  }

  const tempArr = Object.keys(table1);
  for (let j = 0; j < tempArr.length; j++) {
    if (!table2[tempArr[j]]) {
      return false;
    } else if (table2[tempArr[j]] !== table1[tempArr[j]]) {
      return false;
    }
  }

  return true;
}


console.log(checkPermutation2('abc', 'cba'));  // true
console.log(checkPermutation2('timkao', 'kaotim'));  // true
console.log(checkPermutation2('timmkaoo', 'tiimkaao'));  // false
console.log(checkPermutation2('god     ', 'dog'));  // false


/*
  efficiency
  space: O(3N)
  time: O(2N)
*/

/*
  solution 3
*/

function checkPermutation3(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const table = {};

  for (let i = 0; i < str1.length; i++) {
    if (!table[str1[i]]) {
      table[str1[i]] = 1;
    } else {
      table[str1[i]]++
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (!table[str2[j]]) {
      return false;
    } else {
      table[str2[j]]--;
      if (table[str2[j]] < 0) {
        return false;
      }
    }
  }

  return true;
}


console.log(checkPermutation3('abc', 'cba'));  // true
console.log(checkPermutation3('timkao', 'kaotim'));  // true
console.log(checkPermutation3('timmkaoo', 'tiimkaao'));  // false
console.log(checkPermutation3('god     ', 'dog'));  // false


/*
  efficiency
  space: O(N)
  time: O(2N)
*/
