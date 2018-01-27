/*
  interview question 16.8
*/

function englishInt(num) {
  const strInt = num >= 0 ? num.toString(): num.toString().slice(1);
  let digit = null;
  const tempResult = [];
  let partialResult = '';
  const partition = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
  const intMap = {
    '0': '',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '10': 'Ten',
    '11': 'Eleven',
    '12': 'Twelve',
    '13': 'Thirteen',
    '14': 'Fourteen',
    '15': 'Fifteen',
    '16': 'Sixteen',
    '17': 'Seventeen',
    '18': 'Eighteen',
    '19': 'Nineteen',
    '20': 'Twenty',
    '30': 'Thirty',
    '40': 'Forty',
    '50': 'Fifty',
    '60': 'Sixty',
    '70': 'Seventy',
    '80': 'Eighty',
    '90': 'Ninety'
  }

  for (var i = strInt.length - 1; i >= 0; i--) {
    if (digit === null) { digit = 0}
    else { digit++}
    if (digit % 3 === 2 || i === 0) {
      let currPartition = Math.floor(digit / 3);
      if (digit % 3 === 2) {
        partialResult += intMap[strInt[i]] + ' Hundred';
        if (strInt[i + 1] === '1') { partialResult = partialResult + ', ' + intMap[strInt[i - 1] + strInt[i - 2]]}
        else { partialResult = partialResult + ', ' + intMap[strInt[i + 1] +  '0'] + ' ' + intMap[strInt[i + 2]]}
      }
      else if (digit % 3 === 1 && strInt[i] === '1') { partialResult = intMap[strInt[i] + strInt[i + 1]];}
      else if (digit % 3 === 1) { partialResult = intMap[strInt[i] +  '0'] + ' ' + intMap[strInt[i + 1]];}
      else { partialResult = partialResult + intMap[strInt[i]]}

      if (currPartition >= 1) { tempResult.unshift(partialResult + ' ' + partition[currPartition])}
      else { tempResult.unshift(partialResult)}
      partialResult = ''
    }
  }
  if (num >= 0) {
    return tempResult.join(', ')
  } else {
    return 'Negative ' + tempResult.join(', ')
  }
}

console.log(englishInt(1234))
console.log(englishInt(23234))
console.log(englishInt(12223234))
console.log(englishInt(-12223234))
