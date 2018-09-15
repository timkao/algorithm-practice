function masterMind(ans, guess) {
  let hit = 0;
  let seudo = 0;
  const ansObj = {};
  let restGuess = [];
  for (var i = 0; i < ans.length; i++) {
    if (ans[i] === guess[i]) {
      hit++
    } else {
      if (ansObj[ans[i]]) {
        ansObj[ans[i]]++
      } else {
        ansObj[ans[i]] = 1;
      }
      restGuess.push(guess[i])
    }
  }

  for (var j = 0; j < restGuess.length; j++) {
    if (ansObj[restGuess[j]] > 0) {
      ansObj[restGuess[j]]--
      seudo++
    }
  }
  return [hit, seudo];

}

console.log(masterMind('RGBY', 'GGRR'));
console.log(masterMind('GBYY', 'YGYY'));
