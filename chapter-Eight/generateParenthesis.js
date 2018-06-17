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
