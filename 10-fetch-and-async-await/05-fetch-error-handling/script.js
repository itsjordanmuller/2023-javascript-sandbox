// 200 - OK
// fetch("https://httpstat.us/200")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("Success");
//   });

// 404 - Not Found
fetch("https://httpstat.us/500")
  .then((response) => {
    // // Check Status of Response (404)
    // console.log(response.status);
    // // Check if Response is OK (false)
    // console.log(response.ok);
    // // Check Text of Status ("Not Found")
    // console.log(response.statusText);
    if (response.status === 404) {
      throw new Error("Not Found Error");
    } else if (response.status === 500) {
      throw new Error("Server Error");
    } else if (response.status !== 200) {
      throw new Error("Request Failed");
    }
    // Test with response.ok
    // if (!response.ok) {
    //   throw new Error("Request Failed");
    // }
    return response;
  })
  .then(() => {
    console.log("Success");
  })
  // catch Doesn't Run
  .catch((error) => {
    console.log(error);
  });

// Simulating a Network Error
// TypeError Failed to Fetch
// fetch("https:/hello123.net")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("Success");
//   })
//   // catch Does Work with Network Error
//   .catch((error) => {
//     console.log(error);
//   });
