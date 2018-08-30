function allDiff(average, numArr) {
  return numArr.reduce((aggr, num) => {
    const diff = num - average;
      if (diff > 0) {
        aggr[0] += diff
        return aggr
      } else {
        aggr[1] -= diff
        return aggr
      }
  }, [0, 0])
}

function payTrip(people, expences) {
  const sum = expences.reduce((aggr, num) => {
    return aggr + num;
  }, 0)
  const avg = Math.round((sum / people) * 100) / 100;
  return Math.min(...allDiff(avg, expences));
}

console.log(payTrip(4, [15.01, 15.00, 3.01, 3.00]));
console.log(payTrip(3, [10.00, 20.00, 30.00]));
