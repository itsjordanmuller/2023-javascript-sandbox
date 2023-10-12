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

const target = {
  latitude: 37.8023727,
  longitude: -122.4058273,
};

// Watch Position
function watchSuccess(position) {
  const coords = position.coords;

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log("You have reached your destination!");
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(error) {
  console.log(`Error: ${error.code} - ${error.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if Available
  timeout: 5000, // Time to Wait ot Stop Trying for Data
  maximumAge: 0, // Do Not use a Cached Position
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
);
