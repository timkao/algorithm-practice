const solution = 'RGBY'
const guess = 'GGRR'
const colorMapping = {
 R: 0,
 G: 1,
 B: 2,
 Y: 3
}

function masterMind(sol, gus) {
 let hits = 0
 let pseudoHits = 0
 const solArr = [0, 0, 0, 0]
 const gusArr = [0, 0, 0, 0]
 for (var i = 0; i < sol.length; i++) {
  if (sol[i] === gus[i]) {
   hits += 1
  } else {
   solArr[colorMapping[sol[i]]] += 1
   gusArr[colorMapping[gus[i]]] += 1
  }
 }
 for (var j = 0; j < solArr.length; j++) {
  pseudoHits += Math.min(solArr[j], gusArr[j])
 }
 return [hits, pseudoHits]
}

console.log(masterMind(solution, guess))
