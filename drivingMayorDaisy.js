function carPassing(cars, speed) {
  const newObj = {
    time: Date.now(),
    speed: speed
  }
  cars.push(newObj);
  return cars;
}

const cars = [
  {
    make: 'honda',
    model: 'civic'
  },
  {
    make: 'toyota',
    model: 'corolla'
  },
  {
    make: 'pontiac',
    model: 'acadian'
  }
];

console.log(carPassing(cars, 20));