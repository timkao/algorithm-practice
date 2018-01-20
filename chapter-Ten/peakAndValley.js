/*
  interview question 10.11
*/

function peakAndValley(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    const prev =  i - 1;
    const next = i + 1
    if (arr[i] === arr[prev] || arr[i] === arr[next]) {
      continue
    } else {
      if (arr[i] > arr[prev] && arr[i] < arr[next]) {
        const temp = arr[i];
        arr[i] = arr[next];
        arr[next] = temp;
      } else if (arr[i] < arr[prev] && arr[i] > arr[next]) {
        const temp = arr[i];
        arr[i] = arr[next];
        arr[next] = temp;
      }
    }
  }
  return arr;
}

console.log(peakAndValley([5, 3, 1, 2, 3]))
console.log(peakAndValley([1, 10, 11, 3, 3, 18, 17, 11]))
console.log(peakAndValley([0, 1, 4, 7, 8, 9]))
