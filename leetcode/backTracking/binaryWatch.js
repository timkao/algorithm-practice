/**
 * @param {number} num
 * @return {string[]}
 */

var readBinaryWatch = function(num) {
  const watch = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32]
  return buildTimes(num, 0, watch, 0, 0, [])
};

function buildTimes(num, start, choices, hours, minutes, result) {
  if (num === 0) {
      result.push(processTime(hours, minutes))
      return result
  }
  for (var i = start; i < choices.length; i++) {
      if (isValidTime(i, choices, hours, minutes)) {
          if (i <= 3) {
              hours += choices[i]
          }
          if (i >= 4) {
              minutes += choices[i]
          }
          buildTimes(num - 1, i + 1, choices, hours, minutes, result)
          if (i <= 3) {
              hours -= choices[i]
          }
          if (i >= 4) {
              minutes -= choices[i]
          }
      }
  }
  return result
}

function isValidTime(idx, times, hr, min) {
  const currTime = times[idx]
  if (idx <= 3) {
      return (currTime + hr) <= 11
  } else {
      return (currTime + min) <= 59
  }
}

function processTime(hr, min) {
  const mins = min < 10 ? `0${min}` : min
  return `${hr}:${mins}`
}
