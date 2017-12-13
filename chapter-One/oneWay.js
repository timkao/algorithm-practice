/*
  interview question 1.5
*/

function oneWay(str1, str2) {

  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  if (str1.length === str2.length) {
    // check replace
    let threshold = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        threshold++;
        if (threshold > 1) {
          return false;
        }
      }
    }
  } else {
    // check insert and remove
    const long = str1.length > str2.length ? str1 : str2;
    const short = str1.length < str2.length ? str1 : str2;
    for ( let j = 0; j < short.length; j++) {
      let surplus = 0;
      if (long[j] !== short[j + surplus]) {
        surplus++
        if (surplus > 1) {
          return false;
        }
      }
    }
  }

  // if (str1.length === str2.length) {
  //   // check replace
  //   let threshold = 0;
  //   for (let i = 0; i < str1.length; i++) {
  //     if (str1[i] !== str2[i]) {
  //       threshold++;
  //       if (threshold > 1) {
  //         return false;
  //       }
  //     }
  //   }
  // } else if (str1.length === str2.length + 1) {
  //   // check insert
  //   let hole = 0;
  //   for (var j = 0; j < str1.length; j++) {
  //     if (str1[j + hole] !== str2[j]) {
  //       hole++
  //       if (hole > 1) {
  //         return false;
  //       }
  //     }
  //   }
  // } else if (str1.length === str2.length - 1) {
  //   // check remove
  //   let surplus = 0;
  //   for (var k = 0; k < str1.length; k++) {
  //     if (str1[k] !== str2[k + surplus]) {
  //       surplus++
  //       if (surplus > 1) {
  //         return false;
  //       }
  //     }
  //   }
  // }
  return true;
}


/*
  testing case
*/

console.log(oneWay('pale', 'ple'));
console.log(oneWay('pales', 'pale'));
console.log(oneWay('pale', 'bale'));
console.log(oneWay('pale', 'bake'));
console.log(oneWay('paless', 'pale'));
