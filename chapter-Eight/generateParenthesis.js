var generateParenthesis = function (num, result = [], element = '', leftP = 0, rightP = 0) {
  if (leftP === num && rightP === num) {
    result.push(element);
  }

  // generating results....
  if (leftP === rightP) {
    element = element + '('
    leftP++
    generateParenthesis(num, result, element, leftP, rightP);
  }
  else if (leftP > rightP && leftP === num) {
    element = element + ')'
    rightP++
    generateParenthesis(num, result, element, leftP, rightP);
  }
  else if (leftP > rightP && leftP < num) {
    element = element + '('
    leftP++
    generateParenthesis(num, result, element, leftP, rightP);

    // reverse what is added in the previous step
    element = element.substring(0, element.length - 1);
    leftP--

    // recurse another posibility
    element = element + ')'
    rightP++
    generateParenthesis(num, result, element, leftP, rightP);
  }

  return result;
};

console.log(generateParenthesis(3));

function parenthsis(num) {
  return generateParens(num, num, num)
}

function generateParens(num, left, right, temp = '', result = []) {
  if (num === 0) {
    return
  }
  if (left === 0) {
    for (var i = 0; i < right; i++) {
      temp += ')'
    }
    result.push(temp)
    return
  }

  if (left === right) {
    generateParens(num, left - 1, right, temp + '(', result)
  }

  if (left < right) {
    generateParens(num, left - 1, right, temp + '(', result)
    generateParens(num - 1, left, right - 1, temp + ')', result)
  }

  return result
}

console.log(parenthsis(4))
