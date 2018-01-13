function getPrime(num) {
  const crossList = [];

  for (var i = 0; i < num + 1; i++) {
    crossList[i] = true;
  }
  crossList[0] = false;
  crossList[1] = false;

  let prime = 2;
  while (prime <= Math.sqrt(num)) {
    for (var j = prime * prime; j < num + 1; j += prime) {
      crossList[j] = false;
    }

    if (prime === num) {
      break
    }

    for (var k = prime + 1; k < crossList.length; k++) {
      if (crossList[k]) {
        prime = k;
        break
      }
      prime++
    }
  }

  for (var m = 0; m < crossList.length; m++) {
    if (crossList[m]) {
      console.log(m)
    }
  }

}

getPrime(49)
