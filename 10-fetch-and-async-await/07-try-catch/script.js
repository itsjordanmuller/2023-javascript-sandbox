// With Async Await, Try Catch is the Preferred Method of Dealing with Errors

// // try to log x which isn't defined
// try {
//   console.log(x);
//   // catch is triggered in event of error
// } catch (error) {
//   console.log(`Error: ${error}`);
// }

function double(number) {
  if (isNaN(number)) {
    throw new Error(`${number} is not a number`);
  }
  return number * 2;
}

try {
  //   const a = double(2);
  //   throws error for NaN
  const b = double("hello");
  console.log(b);
} catch (error) {
  console.log(`${error}`);
}
