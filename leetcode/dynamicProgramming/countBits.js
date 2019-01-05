var countBits = function(num) {
  if (num === 0) return [0]
  if (num === 1) return [0, 1]
  if (num === 2) return [0, 1, 1]
  const result = [0, 1, 1]
  let curr = 2
  let next = curr * 2
  for (var i = 3; i <= num; i++) {
      if (i < next ) {
          result[i] = result[curr] + result[i - curr]
      }
      if ( i === next) {
          result[i] = 1
          curr = next
          next = curr * 2
      }
  }
  return result
};
