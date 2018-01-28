/*
  interview question 16.10
*/


function livingPeople(peoples) {
  const temp = [];
  for (var i = 0; i < 101; i++) {
    temp[i] = 0;
  }
  for (var j = 0; j < peoples.length; j++) {
    temp[peoples[j].birth - 1900]++
    if (peoples[j].death !== 2000) {
      temp[peoples[j].death - 1900 + 1]--
    }
  }
  return maxSubarray(temp)
}

function maxSubarray(arr) {
  let finalMax = arr[0];
  let currMax = arr[0];
  let result = 0;
  for (var i = 1; i < arr.length; i++) {
    currMax = Math.max(arr[i], currMax + arr[i]);
    if (currMax > finalMax) {
      result = i
      finalMax = currMax
    }
  }
  return result;
}

console.log(maxSubarray([3, -2, 4, -2, 10, -1, 2, -1, 5]))
