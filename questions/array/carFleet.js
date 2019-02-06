var carFleet = function(target, position, speed) {
  const newPosition = position.map((loc, idx) => [loc, speed[idx]]).sort((a, b) => a[0] - b[0])
  let fleet = 0
  carRunning(newPosition, target)
  return fleet

  function carRunning(positions) {
      if (positions.length === 1) {
          fleet += 1
          return
      }
      if (positions.length === 0) return
      carMove(positions, target)
      calculateFleets(positions)
  }

  function carMove(cars, des) {
      for (let i = cars.length - 2; i >= 0 ; i--) {
          const car = cars[i]
          const carInfront = cars[i + 1]
          const carInfrontTimes = (des - carInfront[0]) / carInfront[1]
          const carTimes = (des - car[0]) / car[1]
          if (carTimes <= carInfrontTimes) {
              car[0] = carInfront[0]
              car[1] = carInfront[1]
          }
      }
  }

  function calculateFleets(cars) {
      let currCar = cars[0]
      for (let i = 1; i < cars.length; i++) {
          const nextCar = cars[i]
          if (nextCar[0] !== currCar[0] || nextCar[1] !== currCar[1]) {
              fleet += 1
              currCar = nextCar
          }
      }
      fleet += 1
  }
};
