/*
  interview question 16.11
*/

function divingBoardStr(k, prefix = '', result = []) {
  if (prefix.length === k) {
    result.push(prefix);
    return
  }
  prefix = prefix + 'S';
  divingBoardStr(k, prefix, result);
  prefix = prefix.slice(0, prefix.length - 1);
  prefix = prefix + 'L';
  divingBoardStr(k, prefix, result);
  return result;
}

console.log(divingBoardStr(2))
console.log(divingBoardStr(3))

function divingBoardNum(k){
  const memo = {}
  const resultTable = {};
  dividingBoardHelper(k, 0, 2, 5, resultTable, memo)
  return resultTable;
}

function dividingBoardHelper(times, total, shorter, longer, table, memo) {
  if (times === 0) {
    if (table[total] === undefined) { table[total] = 1; }
    return
  }
  const key = times + ' ' + total;      // record what has been visited
  if (memo[key] !== undefined) { return }
  dividingBoardHelper(times - 1, total + shorter, shorter, longer, table, memo)
  dividingBoardHelper(times - 1, total + longer, shorter, longer, table, memo)
  memo[key] = 1;
}

console.log(divingBoardNum(3)) // 6, 9, 12, 15


function dividingBoardOptimal(k, shorter, longer) {
  const result = [];
  for ( var i = 0; i <= k; i++) {
    result.push(shorter * i + longer * (k - i))
  }
  return result
}

console.log(dividingBoardOptimal(3, 2, 5)) // 6, 9, 12, 15

