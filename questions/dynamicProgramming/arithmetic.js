/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    const diff = [A[1] - A[0], 2]
    let ans = 0
    for (let i = 2; i < A.length; i++) {
        const curDiff = A[i] - A[i - 1]
        if (curDiff === diff[0]) {
            diff[1] += 1
            if (diff[1] >= 3) {
                ans += (diff[1] - 2)
            }
        } else {
            diff[0] = curDiff
            diff[1] = 2
        }
    }
    return ans
};
