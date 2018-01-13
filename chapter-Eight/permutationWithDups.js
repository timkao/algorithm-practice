/*
  interview question 8.8
*/

function permutationWithDups(str) {
  const result = [];
  let table = buildMap(str);
  getPerms(table, '', str.length, result);
  return result;
}

function buildMap(str) {
  const table = {};
  for (var i = 0; i < str.length; i++) {
    if (!table[str[i]]) {
      table[str[i]] = 1;
    } else {
      table[str[i]]++;
    }
  }
  return table;
}

function getPerms(table, prefix, remaining, result) {

  if (remaining === 0) {
    result.push(prefix);
    return result;
  }
  const keys = Object.keys(table);
  for (var i = 0; i < keys.length; i++) {
    const currChar = keys[i]
    const count = table[currChar];
    if (count > 0) {
      table[currChar]--
      getPerms(table, prefix + currChar, remaining - 1, result);
      table[currChar]++
    }
  }
}

console.log(permutationWithDups('aacc'))
