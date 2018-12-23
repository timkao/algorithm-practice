const assert = require('assert')

const ex = [30, 15, 60, 120, 45, 15, 15, 45]
const ex2 = [30, 15, 60, 75, 45, 15, 15, 45]
const ex3 = [30, 15, 60, 75, 45, 15, 15, 45, 150, 90]

function massuse(appts, start = 0, acc = 0) {
  if (start >= appts.length) return acc
  const takeAppt = massuse(appts, start + 2, acc + appts[start])
  const notTakeAppt = massuse(appts, start + 1, acc)
  return Math.max(takeAppt, notTakeAppt)
}

assert.equal(massuse(ex), 210)
assert.equal(massuse(ex2), 180)
assert.equal(massuse(ex3), 300)

function massuseOpt(appts, start = 0, acc = 0, memo = {}) {
  if (start >= appts.length) return acc
  if (memo[start] !== undefined) return memo[start]
  const takeAppt = acc + massuse(appts, start + 2, appts[start], memo)
  const notTakeAppt = acc + massuse(appts, start + 1, 0, memo)
  memo[start] = Math.max(takeAppt, notTakeAppt)
  return memo[start]
}

assert.equal(massuseOpt(ex), 210)
assert.equal(massuseOpt(ex2), 180)
assert.equal(massuseOpt(ex3), 300)

