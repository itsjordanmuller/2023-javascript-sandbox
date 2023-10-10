// fetch("https://httpstat.us/200")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("Success");
//   });

fetch("https://httpstat.us/404")
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log("Success");
  })
  // catch Doesn't Run
  .catch((error) => {
    console.log(error);
  });
