/*
  interview question 1.6
*/

function stringCompression(str) {
  let compression = '';
  const table = {};
  for (let i = 0; i < str.length; i++) {
    if ( i !== 0) {
      if (str[i] === str[i - 1]) {
        table[str[i]]++
      } else {
        table[str[i]] = 1;
        compression += str[i - 1];
        compression += table[str[i - 1]];
      }
    } else {
      table[str[i]] = 1
    }

    if (i === str.length - 1) {
      compression += str[i];
      compression += table[str[i]];
    }
  }

  if (compression.length === str.length) {
    return str;
  }

  return compression;

}

/*
  testing case
*/

console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('aabbcc'));

/*
  efficiency
  space: O(N)
  time: O(N)
*/



function stringCompression2(str) {
  let compression = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {

    if ( i !== 0) {
      if (str[i] === str[i - 1]) {
        count++
      } else {
        compression += str[i - 1];
        compression += count;
        count = 1;
      }
    }

    if (i === str.length - 1) {
      compression += str[i];
      compression += count;
    }
  }

  if (compression.length === str.length) {
    return str;
  }

  return compression;

}


/*
  testing case
*/

console.log(stringCompression2('aabcccccaaa'));
console.log(stringCompression2('aabbcc'));



/*
  efficiency
  space: O(1)
  time: O(N)
*/
