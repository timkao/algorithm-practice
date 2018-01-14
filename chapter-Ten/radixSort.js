const testArr = [2, 6, 10, 7, 33, 72, 5, 3, 22, 101, 786, 23];


function radixSort(arr) {
  const buckets = [];
  for (var i = 0; i < 10; i++) {
    buckets.push([]);
  }

  let max;
  for (var j = 0; j < arr.length - 1; j++) {
    if ( max === undefined) {
      max = arr[j]
    } else if ( arr[j] > max) {
      max = arr[j]
    }
  }

  //  123 => digit = 3
  let digit = 0;
  while ( max >= 1) {
    digit++
    max = max / 10;
  }

  // padding
  let temp = [];
  for (var p = 0; p < arr.length; p++) {
    let tempValue = arr[p].toString();
    let currLen = tempValue.length;
    while ( currLen < digit) {
      tempValue = '0' + tempValue;
      currLen++
    }
    temp.push(tempValue);
  }

  for (var k = 0; k < digit; k++) {
    for ( var m = 0; m < temp.length; m++) {
      let bucket = Number(temp[m][digit - k - 1]);
      buckets[bucket].push(temp[m])
    }
    temp = [];
    for (var n = 0; n < buckets.length; n++) {
      temp = temp.concat(buckets[n]);
      buckets[n] = [];
    }
  }
  return temp.map(function(ele){ return Number(ele)});
}

console.log(radixSort(testArr))
