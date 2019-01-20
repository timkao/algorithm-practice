function isPalindrome(str) {
  let start = 0;
  let end = 0;

  if (str.length === 0 || str.length === 1) {
    return false
  }

  if (str.length % 2 === 0) {
    start = (str.length >> 1) - 1;
    end = start + 1;
    while (start >= 0 && end < str.length && str[start] === str[end]) {
      if (start === 0 && end === str.length - 1) {
        return true
      }
      start--
      end++
    }
    return false;
  } else {
    start = str.length >> 1;
    end = start;
    while (start >= 0 && end < str.length && str[start] === str[end]) {
      if (start === 0 && end === str.length - 1) {
        return true
      }
      start--
      end++
    }
    return false;
  }
}

console.log(isPalindrome('aba'))
