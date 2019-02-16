/* eslint-disable */

var isNumber = function(s) {
  const str = s.trim()   //  trim the spaces
  let met_e = false      // found e or not
  let met_digit = false  // found digit or not
  let met_dot = false   // found dot or not
  for (let i = 0; i < str.length; i++) {
    const curChar = str[i]
  /* + and - are only allowed in the very beginning or right after e */
    if (['+', '-'].includes(curChar)) {
      if (i > 0 && str[i - 1] !== 'e') return false
    } else if (curChar === '.') {  /* only one dot and not dot is allowed after 'e' */
      if (met_e || met_dot) return false
      met_dot = true
    } else if (curChar === 'e' ) { /* only one e and at least one digit needs to be before 'e' */
      if (met_e || !met_digit) return false
      met_e = true
      met_digit = false /* reset the digit to false since at least one digit needs to be after 'e' */
    } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(curChar)) {
      met_digit = true
    } else {
      return false
    }
  }
  return met_digit /* needs to have at least one digit */
};

/* eslint-disable */
