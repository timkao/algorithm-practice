function matches(str, pattern, comparePointer = 0, result = []) {
  if (comparePointer >= str.length - pattern.length) {
    return result
  }

  for (var i = 0; i < pattern.length; i++) {
    if (pattern[i] !== str[i + comparePointer]) {
      break
    }
    if ( i === pattern.length - 1) {
      result.push(comparePointer)
    }
  }

  return matches(str, pattern, comparePointer + 1, result)

}

console.log(matches('examing an example for exponential problem', 'exa'));
