var map = L.map("map").setView([37.8023727, -122.4058273], 9);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([37.8023727, -122.4058273])
  .addTo(map)
  .bindPopup("Coit Tower in San Francisco, CA")
  .openPopup();

const curLocMarker = L.marker([0, 0])
  .addTo(map)
  .bindPopup("Approximate Current Location")
  .openPopup();

navigator.geolocation.getCurrentPosition(function (pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  curLocMarker.setLatLng([lat, lng]).update();
  curLocMarker.setView([lat, lng], 9);

  curLocMarker.bindPopup(
    "<strong>Your Location</strong><br /> Approximate Current Location"
  );
});
