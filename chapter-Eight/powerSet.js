function powerSet(arr, acc) {
  if (acc === undefined) { acc = [[]];}
  if (arr.length - 1 < 0) { return acc;}
  const currlength = acc.length

  for (var i = 0; i < currlength; i++) {
    const newEl = acc[i].slice(0)
    newEl.push(arr[0]);
    acc.push(newEl);
  }

  arr.shift();
  return powerSet(arr, acc);

}


console.log(powerSet([1, 2, 3]))
