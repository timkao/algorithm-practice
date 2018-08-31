const votes = [
  [1, 2, 3],
  [2, 1, 3],
  [2, 3, 1],
  [1, 2, 3],
  [3, 1, 2],
  [3, 2, 1],
  [1, 3, 2],
  [2, 3, 1],
];

const candidates = [
  'Tim Kao',
  'John Smith',
  'Peter Chen'
];


function percentVotes(candidateNumber, votesArr, losers) {
  return votesArr.reduce((aggr, ele) => {

    let firstChoice = 0;
    while (losers.includes(ele[firstChoice])) {
      firstChoice++;
    }

    if (candidateNumber === ele[firstChoice] ) {
      return aggr + 1;
    }
    return aggr
  }, 0) * 100 / votes.length;
}

console.log(percentVotes(1, votes, [3]));
console.log(percentVotes(2, votes, [3]));
console.log(percentVotes(3, votes, [3]));


function voting(numberOfCandidates, candidateList, votesArr, losers = []) {
  const curretCompetition = {};
  // summarize votes
  for (var i = 1; i <= numberOfCandidates; i++) {
    if (!losers.includes(i)) {
      const currenPercent = percentVotes(i, votesArr, losers);
      if (currenPercent > 50) {
        return candidateList[i - 1];
      } else {
        curretCompetition[i] = currenPercent
      }
    }
  }

  const candidateArrs = Object.keys(curretCompetition);
  // pick min value
  const min = candidateArrs.reduce((currMin, ele) => {
    return Math.min(currMin, curretCompetition[ele]);
  }, 100)
  const max = candidateArrs.reduce((currMax, ele) => {
    return Math.max(currMax, curretCompetition[ele]);
  }, 0)

  if (min === max) {
    return 'Tied!'
  }

  // update loser
  candidateArrs.forEach(num => {
    if (curretCompetition[num] === min) {
      losers.push(Number(num))
    }
  })

  // recursive
  return voting(numberOfCandidates, candidateList, votesArr, losers);
}

console.log(voting(3, candidates, votes));
