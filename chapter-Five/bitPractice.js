function getBit(num, bit) {
  const helper = 1 << bit;
  if  ((num & helper) !== 0) {
    return '1';
  } else {
    return '0';
  }
}

function turnToBits(num) {
  // find how many bits

  // turn to bits
  let result = '';
  for (var i = 0; i < 3; i++) {
    result = getBit(num, i) + result;
  }

  return result;
}

console.log(turnToBits(4))

function setBit(num, bit) {
  const helper = 1 << bit;
  return num | helper;       // only change 0 t 1
}

console.log(setBit(512, 5))

function clearBit(num, bit) {
  const helper = ~( 1 << bit);
  return num & helper;       // only change 1 to 0
}

console.log(clearBit(512, 9))

function clearBitMSBthroughI(num, bit) {
  const helper =  ( 1 << bit ) - 1
  return num & helper
}

console.log(clearBitMSBthroughI(600, 6)) // remove all 1 after index 6


function clearBitIthrough0(num, bit) {
  const helper = ( -1 << (bit + 1))
  return num & helper
}

console.log(clearBitIthrough0(600, 4));  // remove all 1 before index 4

function updateBit(num, bit, bitIs1) {
  const value = bitIs1 === 1 ? 1 : 0;
  const helper = ~( 1 << bit)
  return ( num & helper) | ( value << bit)
}

console.log(updateBit(600, 10, 1));
