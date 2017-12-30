/*
  interview quesiton 5.8
*/

const arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = [0];
}

function drawLine(screen, width, x1, x2, y) {

  // longest & height
  const longest = screen.length * 8;
  const height = longest / width;

  const widthInByte = width / 8;

  // invalid setting (according to the question)
  if (height < y) { return false }
  if (x1 > width || x2 > width) { return false }

  // start point and end point
  let startByteIndex = y * widthInByte + Math.floor(x1 / 8);
  let startPixelIndex = x1 % 8;
  let endByteIndex = y * widthInByte + Math.floor(x2 / 8);
  let endPixelIndex = x2 % 8;

  let tempByte;
  // when x1 and x2 are on different bytes
  while (startByteIndex !== endByteIndex) {
    tempByte = Math.pow(2, 8 - startPixelIndex) - 1;
    screen[startByteIndex] = [tempByte];
    startPixelIndex = 0;
    startByteIndex++
  }

  // when x1 moved to x2's byte
  const leftShift = 8 - endPixelIndex - 1;
  tempByte = Math.pow(2, 8 - startPixelIndex) - 1;
  const helper = (-1 << leftShift);
  tempByte = tempByte & helper;
  screen[startByteIndex] = [tempByte];

  return screen;

}

console.log(drawLine(arr, 16, 1, 10, 3))
