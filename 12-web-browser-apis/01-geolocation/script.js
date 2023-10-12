// Get Current Position
function curSuccess(position) {
  const coords = position.coords;
  //   console.log(position);
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Accuracy: within ${coords.accuracy} meters`);
}

function curError(error) {
  console.log(`Error: ${error.code} - ${error.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if Available
  timeout: 5000, // Time to Wait ot Stop Trying for Data
  maximumAge: 0, // Do Not use a Cached Position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);
