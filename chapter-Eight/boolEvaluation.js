var assert = require('assert')

function boolEval(str, bool) {
    if (str.length === 0) return 0
    if (str.length === 1) {
        if (bool && str[0] === '1') return 1
        if (!bool && str[0] === '0' ) return 1
        return 0
    }
    let result = 0
    for (var i = 1; i < str.length - 1; i += 2) {
        const leftString = str.substring(0, i)
        const rightString = str.substring(i + 1)
        const leftTrue = boolEval(leftString, true)
        const leftFalse = boolEval(leftString, false)
        const rightTrue = boolEval(rightString, true)
        const rightFalse = boolEval(rightString, false)
        const totalWays = (leftTrue + leftFalse) * (rightTrue + rightFalse)
        let subWays = 0
        if (str[i] === '^') {
            subWays = bool ? leftTrue * rightFalse + leftFalse * rightTrue :
                totalWays - (leftTrue * rightFalse) - (leftFalse * rightTrue)
        } else if (str[i] === '|') {
            subWays = bool ? totalWays - (leftFalse * rightFalse) : leftFalse * rightFalse
        } else if (str[i] === '&') {
            subWays = bool ? leftTrue * rightTrue : totalWays - (leftTrue * rightTrue)
        }
        result += subWays
    }
    return result
}
assert.equal(boolEval("1^0|0|1", false), 2)
assert.equal(boolEval("0&0&0&1^1|0", true), 10)

function boolEvalWithMemoi(str, bool, table = {}) {
    if (str.length === 0) return 0
    if (str.length === 1) {
        if (bool && str[0] === '1') return 1
        if (!bool && str[0] === '0' ) return 1
        return 0
    }
    const key = bool ? str + '1' : str + '0'
    if (table[key] !== undefined) return table[key]

    let result = 0
    for (var i = 1; i < str.length - 1; i += 2) {
        const leftString = str.substring(0, i)
        const rightString = str.substring(i + 1)
        const leftTrue = boolEval(leftString, true, table)
        const leftFalse = boolEval(leftString, false, table)
        const rightTrue = boolEval(rightString, true, table)
        const rightFalse = boolEval(rightString, false, table)
        const totalWays = (leftTrue + leftFalse) * (rightTrue + rightFalse)
        let subWays = 0
        if (str[i] === '^') {
            subWays = bool ? leftTrue * rightFalse + leftFalse * rightTrue :
                totalWays - (leftTrue * rightFalse) - (leftFalse * rightTrue)
        } else if (str[i] === '|') {
            subWays = bool ? totalWays - (leftFalse * rightFalse) : leftFalse * rightFalse
        } else if (str[i] === '&') {
            subWays = bool ? leftTrue * rightTrue : totalWays - (leftTrue * rightTrue)
        }
        result += subWays
    }
    table[key] = result
    return table[key]
}

assert.equal(boolEvalWithMemoi("1^0|0|1", false), 2)
assert.equal(boolEvalWithMemoi("0&0&0&1^1|0", true), 10)
