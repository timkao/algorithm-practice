const assert = require('assert')

const ex1 = [30, 15, 60, 120, 45, 15, 15, 45]
const ex2 = [30, 15, 60, 75, 45, 15, 15, 45]
const ex3 = [30, 15, 60, 75, 45, 15, 15, 45, 150, 90]
const ex4 = [75, 105, 120, 75, 90, 135]

function massuse(appts, start = 0, acc = 0) {
  if (start >= appts.length) return acc
  const takeThisAppt = massuse(appts, start + 2, acc + appts[start])
  const notTakeThisAppt = massuse(appts, start + 1, acc)
  return Math.max(takeThisAppt, notTakeThisAppt)
}

assert.equal(massuse(ex1), 210)
assert.equal(massuse(ex2), 180)
assert.equal(massuse(ex3), 300)
assert.equal(massuse(ex4), 330)

function massuseOpt(appts, start = 0, acc = 0, memo = {}) {
  if (start >= appts.length) return acc
  if (memo[start] !== undefined) return memo[start]
  const takeThisAppt = acc + massuse(appts, start + 2, appts[start], memo)
  const notTakeThisAppt = acc + massuse(appts, start + 1, 0, memo)
  memo[start] = Math.max(takeThisAppt, notTakeThisAppt)
  return memo[start]
}

assert.equal(massuseOpt(ex1), 210)
assert.equal(massuseOpt(ex2), 180)
assert.equal(massuseOpt(ex3), 300)
assert.equal(massuseOpt(ex4), 330)

function massuseMostOpt(appts) {
  let oneAWay = 0;
  let twoAWay = 0;
  for (var i = appts.length - 1; i >= 0; i--) {
    const bestWith = appts[i] + twoAWay
    const bestWithout = oneAWay
    const current = Math.max(bestWith, bestWithout)
    twoAWay = oneAWay
    oneAWay = current
  }
  return oneAWay
}

assert.equal(massuseMostOpt(ex1), 210)
assert.equal(massuseMostOpt(ex2), 180)
assert.equal(massuseMostOpt(ex3), 300)
assert.equal(massuseMostOpt(ex4), 330)

