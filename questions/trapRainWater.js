const arr = [
  [12,13,1,12],
  [13,4,13,12],
  [13,8,10,12],
  [12,13,12,12],
  [13,13,13,13]
]

const arr2 = [
  [9,9,9,9,9,9,8,9,9,9,9],
  [9,0,0,0,0,0,1,0,0,0,9],
  [9,0,0,0,0,0,0,0,0,0,9],
  [9,0,0,0,0,0,0,0,0,0,9],
  [9,9,9,9,9,9,9,9,9,9,9]
]

const arr3 = [
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]

let check = {cum: 0};
let check2 = {cum: 0};


var trapRainWater = function(terrain) {

  const result = {cum: 0};
  for (var i = 0; i < terrain.length; i++) {
    for (var j = 0; j < terrain[i].length; j++) {
      getWater(j, i, terrain[i][j], terrain, result)
    }
  }
  return result.cum;
}



function getWater(xPosition, yPosition, currheight, terrain, result) {




  let left = getHeight(xPosition - 1, yPosition, terrain, currheight, 'left');
  let right = getHeight(xPosition + 1, yPosition, terrain, currheight, 'right')
  let top = getHeight(xPosition, yPosition - 1, terrain, currheight, 'top');
  let bottom = getHeight(xPosition, yPosition + 1, terrain, currheight, 'bottom')

  if ( left === undefined || right === undefined || top === undefined || bottom === undefined) {
    return
  }

  const limits = {
    left: left,
    right: right,
    top: top,
    bottom: bottom
  };
  let tempX = xPosition - 1

  while (terrain[yPosition][tempX] <= currheight) {
    if (updateVLimits(tempX, yPosition, terrain, currheight, limits) === false ) {
      return
    }
    tempX--
  }
  tempX = xPosition + 1;
  while (terrain[yPosition][tempX] <= currheight) {
    if (updateVLimits(tempX, yPosition, terrain, currheight, limits) === false) {
      return
    }
    tempX++
  }

  let tempY = yPosition - 1;
  while (terrain[tempY][xPosition] <= currheight) {

    if (updateHLimits(xPosition, tempY, terrain, currheight, limits) === false) {
      return
    }
    tempY--
  }

  tempY = yPosition + 1
  while (terrain[tempY][xPosition] <= currheight) {
    if (updateHLimits(xPosition, tempY, terrain, currheight, limits) === false) {
      return
    }
    tempY++
  }

  console.log('limits: ', limits)
  if (limits['left'] > currheight && limits['right'] > currheight && limits['top'] > currheight && limits['bottom'] > currheight) {
    const increaseHeight = Math.min(limits['left'], limits['right'], limits['top'], limits['bottom']) - currheight;
    console.log(increaseHeight)
    result.cum += increaseHeight;
    getWater(xPosition, yPosition, currheight + increaseHeight, terrain, result)
  }

}


function updateVLimits(xPosition, yPosition, terrain, currheight, limits) {

  let top = getHeight(xPosition, yPosition - 1, terrain, currheight, 'top');
  let bottom = getHeight(xPosition, yPosition + 1, terrain, currheight, 'bottom')
  if (top === undefined || bottom === undefined) {
    return false;
  }
  //console.log('top: ', top)
  if (top < limits['top']) {
    limits['top'] = top;
  }
  if (bottom < limits['bottom']) {
    limits['bottom'] = bottom;
  }

}

function updateHLimits(xPosition, yPosition, terrain, currheight, limits) {

    let left = getHeight(xPosition - 1, yPosition, terrain, currheight, 'top');
    let right = getHeight(xPosition + 1, yPosition, terrain, currheight, 'bottom')

    if (left === undefined || right === undefined) {
      return false;
    }

    if (left < limits['left']) {
      limits['left'] = left;
    }
    if (right < limits['right']) {
      limits['right'] = right;
    }

  }


function getHeight(xPosition, yPosition, terrain, currheight, direction) {
  if (terrain[yPosition] === undefined) {
    return undefined
  } else if (terrain[yPosition][xPosition] === undefined) {
    return undefined
  }

  if (terrain[yPosition][xPosition] > currheight) {
    return terrain[yPosition][xPosition]
  }

  if (direction === 'left') {
    return getHeight(xPosition - 1, yPosition, terrain, currheight, 'left')
  } else if (direction === 'right') {
    return getHeight(xPosition + 1, yPosition, terrain, currheight, 'right')
  } else if (direction === 'top') {
    return getHeight(xPosition, yPosition - 1, terrain, currheight, 'top')
  } else if (direction === 'bottom') {
    return getHeight(xPosition, yPosition + 1, terrain, currheight, 'bottom')
  }

}



// console.log(getHeight(4, 0, arr, 3, 'top'))  // return undefined
// console.log(getHeight(2, 1, arr, 1, 'left')) // return 2
// console.log(getHeight(2, 1, arr, 2, 'left')) // return 3


// getWater(1, 1, 4, arr, check); // return 2;
// //getWater(0, 0, 1, arr, check2); // return 0;

// console.log(check)
// console.log(check2)

console.log(trapRainWater(arr3));
