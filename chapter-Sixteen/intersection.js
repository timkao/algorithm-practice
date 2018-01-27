/*
  interview question 16.3
*/


// lineA = [[xa, ya], [xa2, ya2]] => y = slopeA * x + distA
// lineB = [[xb, yb], [xb2, yb2]]

function intersection(lineA, lineB) {
  let intersectionX, intersectionY, xInRange, yInRange, a1InRange, a2InRange;
  const slopeA = (lineA[1][1] - lineA[0][1]) / (lineA[1][0] - lineA[0][0])
  const distA = lineA[0][1] - slopeA * lineA[0][0]

  const slopeB = (lineB[1][1] - lineB[0][1]) / (lineB[1][0] - lineB[0][0])
  const distB = lineB[0][1] - slopeB * lineB[0][0]

  const minAX = Math.min(lineA[0][0], lineA[1][0]);
  const maxAX = Math.max(lineA[0][0], lineA[1][0]);
  const minAY = Math.min(lineA[0][1], lineA[1][1]);
  const maxAY = Math.max(lineA[0][1], lineA[1][1]);
  const minBX = Math.min(lineB[0][0], lineB[1][0]);
  const maxBX = Math.max(lineB[0][0], lineB[1][0]);
  const minBY = Math.min(lineB[0][1], lineB[1][1]);
  const maxBY = Math.max(lineB[0][1], lineB[1][1]);

  if (slopeA === Infinity && slopeB !== Infinity) {
    intersectionY = lineA[0][1];
    intersectionX = (lineA[0][1] - distB) / slopeB;
    return inRange(intersectionX, intersectionY, minAX, maxAX, minBX, maxBX, minAY, maxAY, minBY, maxBY)
  } else if (slopeB === Infinity && slopeA !== Infinity) {
    intersectionY = lineB[0][1];
    intersectionX = (lineB[0][1] - distA) / slopeA;
    return inRange(intersectionX, intersectionY, minAX, maxAX, minBX, maxBX, minAY, maxAY, minBY, maxBY)
  } else if (slopeA === Infinity && slopeB === Infinity) {
    a1InRange = (lineA[0][0] >= minBX && lineA[0][0] <= maxBX && lineA[0][1] >= minBY && lineA[0][1] <= maxBY)
    a2InRange = (lineA[1][0] >= minBX && lineA[1][0] <= maxBX && lineA[1][1] >= minBY && lineA[1][1] <= maxBY)
    if (a1InRange || a2InRange) {
      return 'overlap';
    } else {
      return false;
    }
  }

  if (slopeA !== slopeB) {
    intersectionX = (distB - distA) / (slopeA - slopeB);
    intersectionY = (slopeA * distB - slopeB * distA) / (slopeA - slopeB);
    return inRange(intersectionX, intersectionY, minAX, maxAX, minBX, maxBX, minAY, maxAY, minBY, maxBY)
  } else {
    if (distA === distB) {
      a1InRange = (lineA[0][0] >= minBX && lineA[0][0] <= maxBX && lineA[0][1] >= minBY && lineA[0][1] <= maxBY)
      a2InRange = (lineA[1][0] >= minBX && lineA[1][0] <= maxBX && lineA[1][1] >= minBY && lineA[1][1] <= maxBY)
      if (a1InRange || a2InRange) {
        return 'overlap';
      } else {
        return false;
      }
    } else {
      return false
    }
  }
}

function inRange(x, y, minax, maxax, minbx, maxbx, minay, maxay, minby, maxby) {
  const xInRange = (x >= minax && x <= maxax && x >= minbx && x <= maxbx)
  const yInRange = (y >= minay && y <= maxay && y >= minby && y <= maxby)
  if (xInRange && yInRange) {
    return [x, y];
  } else {
    return false;
  }
}


console.log(intersection([[0, -2], [20, 58]], [[0, 1], [10, 21]]))
console.log(intersection([[0, -2], [20, -2]], [[0, 1], [10, 21]]))
