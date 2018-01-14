/*
  interview question 10.2
*/

function groupAna(arr) {
  // use hashTable technique
  const tempTable = {};
  for ( var i = 0; i < arr.length; i++) {
    let key = arr[i].split('').sort().join('');
    if (tempTable[key] === undefined) {
      tempTable[key] = [arr[i]];
    } else {
      tempTable[key].push(arr[i])
    }
  }
  const keys = Object.keys(tempTable);
  let result = [];
  keys.forEach(function(ele){
    result = result.concat(tempTable[ele]);
  })
  return result;
}
console.log(groupAna(['abc', 'cxy', 'cx', 'cab', 'xy', 'yx']));

