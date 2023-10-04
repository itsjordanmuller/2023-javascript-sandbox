// Reduce an Array to a Single Value
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Full Version of Sum with Reduce
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// Shorter Version with Arrow Function
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);

// Using a For Loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

console.log(sum3());

const cart = [
  { id: 1, name: "Product 1", price: 130 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 170 },
];

const total = cart.reduce((acc, product) => acc + product.price, 0);

console.log(total);
