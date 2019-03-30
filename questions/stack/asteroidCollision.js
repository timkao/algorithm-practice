var asteroidCollision = function(asteroids) {
  const right = []
  const left = []
  const result = []

  for (let i = 0; i < asteroids.length; i++) {
      const num = asteroids[i]
      if (num > 0) {
          right.push(num)
      } else {
          if (right.length === 0) {
              result.push(num)
          } else {
              const exist = collide(right, num)
              if (exist) result.push(num)
          }
      }
  }
  return result.concat(right)
};

function collide(arr, num) {
  for (let i = arr.length - 1; i >= 0; i--) {
      const oppositeNum = arr[i]
      if (oppositeNum + num === 0) {
          arr.pop()
          return false
      } else if (oppositeNum + num > 0) {
          return false
      } else {
          arr.pop()
      }
  }
  return true
}
