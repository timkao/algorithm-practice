/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  const choices = findChoices(time)
  const timeArr = time.split(':')
  const originHr = timeArr[0][0] === '0' ? Number(timeArr[0][1]) : Number(timeArr[0])
  const originMin = timeArr[1][0] === '0' ? Number(timeArr[1][1]) : Number(timeArr[1])
  return findTime(choices, [], [null, null], 0, originHr, originMin)[0]
};

function findTime(nums, acc, result, start, orHr, orMin) {
  if (acc.length === 4) {
      return findMinDiff(acc, result, orHr, orMin)
  }
  for (var i = 0; i < nums.length; i++) {
      const curChoice = nums[i]
      if (isValidChoice(curChoice, start, acc)) {
          acc.push(curChoice)
          findTime(nums, acc, result, start + 1, orHr, orMin)
          acc.pop()
      }
  }
  return result
}

function findChoices(str) {
  const result = []
  for (var i = 0; i < str.length; i++) {
      if (str[i] !== ':') {
          result.push(Number(str[i]))
      }
  }
  return result
}

function findMinDiff(currTimeArr, curResult, originHr, originMin) {
  const firstDigit = currTimeArr[0]
  const secondDigit = currTimeArr[1]
  const thirdDigit = currTimeArr[2]
  const forthDigit = currTimeArr[3]
  const curHr = firstDigit === 0 ? secondDigit : firstDigit * 10 + secondDigit
  const curMin = thirdDigit === 0 ? forthDigit : thirdDigit * 10 + forthDigit
  let diff
  if (curHr < originHr || (curHr === originHr && curMin <= originMin)) {
      diff = 60 * 24 - (originHr - curHr) * 60 - (originMin - curMin)
  } else {
      diff = (curHr - originHr) * 60 + (curMin - originMin)
  }
  if (curResult[0] === null || curResult[1] > diff ) {
      const curHrStr = curHr < 10 ? `0${curHr}` : curHr
      const curMinStr = curMin < 10 ? `0${curMin}` : curMin
      curResult[0] = `${curHrStr}:${curMinStr}`
      curResult[1] = diff
      return curResult
  }
  return curResult
}

function isValidChoice(num, digitIdx, acc) {
  if (digitIdx === 0) {
      return 0 <= num && num <= 2
  }
  if (digitIdx === 1 && acc[0] === 2) {
      return 0 <= num && num <= 3
  }
  if (digitIdx === 1 && acc[0] !== 2) {
      return 0 <= num && num <= 9
  }
  if (digitIdx === 2) {
      return 0 <= num && num <= 5
  }
  if (digitIdx === 3) {
      return 0 <= num && num <= 9
  }
}
