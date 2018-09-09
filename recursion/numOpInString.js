const example = 'Today the lucky number is 2. the coffee is 3.25 dollars.';

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function checkOutNum(str, opr) {
  if (str === '') {
    return str
  }
  return opr(Number(str))
}

function numOpInString(opr, str, begin = 0, numStrAggr = '', result = '') {
  const currChar = str[begin];
  if (begin === str.length - 1) {
    if (!numbers.includes(currChar)) {
      result += checkOutNum(numStrAggr, opr);
      result += currChar;
    } else {
      numStrAggr += currChar
      result += checkOutNum(numStrAggr, opr);
    }
    return result
  }

  if (!numbers.includes(currChar)) {

    if (currChar === '.' && numStrAggr.length !== 0 && numbers.includes(str[begin + 1])) {
      numStrAggr += currChar
      return numOpInString(opr, str, begin + 1, numStrAggr, result)
    }

    result += checkOutNum(numStrAggr, opr);
    result += currChar;
    return numOpInString(opr, str, begin + 1, '', result)
  } else {
    numStrAggr += currChar
    return numOpInString(opr, str, begin + 1, numStrAggr, result)
  }
}


console.log(numOpInString((num) => num * 2, example));
