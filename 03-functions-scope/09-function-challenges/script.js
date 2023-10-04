// Challenge 1
function getCelsius(tempFahrenheit) {
  return (5 / 9) * (tempFahrenheit - 32);
}
console.log(getCelsius(32));

const getC = (tempF) => (5 / 9) * (tempF - 32);
console.log(getC(212));

const toTempC = (num) => num + "\xB0C";
console.log(toTempC(getC(100)));

// Challenge 2
function minMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `Area of Rectangle with Width ${width} and Length ${length} is ${area}`;

  console.log(output);
})(10, 5);
