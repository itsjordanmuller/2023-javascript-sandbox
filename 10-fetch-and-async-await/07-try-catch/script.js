// With Async Await, Try Catch is the Preferred Method of Dealing with Errors

// try to log x which isn't defined
try {
  console.log(x);
  // catch is triggered in event of error
} catch (error) {
  console.log(`Error: ${error}`);
}
