let x, y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

sum = x + y;
sumOutput = `${x} + ${y} = ${sum}`;

difference = x - y;
differenceOutput = `${x} - ${y} = ${difference}`;

product = x * y;
productOutput = `${x} * ${y} = ${product}`;

quotient = x / y;
quotientOutput = `${x} / ${y} = ${quotient}`;

remainder = x % y;
remainderOutput = `${x} % ${y} = ${remainder}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(remainderOutput);
