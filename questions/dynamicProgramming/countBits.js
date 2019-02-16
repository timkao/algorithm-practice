var countBits = function(num) {
    if (num === 0) return [0]
    if (num === 1) return [0, 1]
    const dp = [0, 1, 1]
    let base = 2
    let nextBase = base * 2
    for (let i = 3; i <= num; i++) {
        if (i === nextBase) {
            dp[i] = 1
            base = nextBase
            nextBase = base * 2
        } else {
            dp[i] = 1 + dp[i - base]
        }
    }
    return dp
};
