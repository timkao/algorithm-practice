function findMissing(arr) {
  let diff = 0

  for (var i = 0; i < arr.length - 1; i++) {
    let currDiff = arr[i + 1] - arr[i]
    if (diff === 0) { diff = currDiff }
    else if (Math.abs(currDiff) > Math.abs(diff)) {
      if (currDiff / diff === 2) {
        return arr[i] + diff
      } else {
        return false
      }
    }
    else if (Math.abs(currDiff) < Math.abs(diff)) {
      if (diff / currDiff === 2) {
        return arr[i] - currDiff
      } else {
        return false
      }
    }
  }
}

console.log(findMissing([1, 3, 4]))
console.log(findMissing([2, 9, 23]))
console.log(findMissing([1,3,5,9,11]))
console.log(findMissing([-1, -3, -4]))


function findMissing2(arr) {
  const totalDiff = arr[arr.length - 1] - arr[0]
  const gap = totalDiff / arr.length

  for (var i = 0; i < arr.length - 1; i++) {
    let currDiff = arr[i + 1] - arr[i]
    if (currDiff !== gap) {
      return arr[i] + gap
    }
  }
}

console.log(findMissing2([1, 3, 4]))
console.log(findMissing2([2, 9, 23]))
console.log(findMissing2([1,3,5,9,11]))
console.log(findMissing2([-1, -3, -4]))
