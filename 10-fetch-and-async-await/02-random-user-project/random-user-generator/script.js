const generateBtn = document.getElementById("generate");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const locationEl = document.getElementById("location");
const ageEl = document.getElementById("age");
const img = document.getElementById("user-img");
const bodyEl = document.body;

function fetchUser() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      const { name, email, phone, location, dob, gender, picture } =
        data.results[0];
      const { first, last } = name;
      const { city, state } = location;
      const { age } = dob;
      const { large } = picture;

      if (gender === "male") {
        bodyEl.style.backgroundColor = "steelblue";
      } else if (gender === "female") {
        bodyEl.style.backgroundColor = "rebeccapurple";
      } else {
        bodyEl.style.backgroundColor = "gray-800";
      }
      img.src = `
        ${large}
      `;
      nameEl.innerHTML = `
        <span class="font-bold">Name: </span>${first} ${last}
      `;
      emailEl.innerHTML = `
        <span class="font-bold">Email: </span>${email}
      `;
      phoneEl.innerHTML = `
        <span class="font-bold">Phone: </span>${phone}
      `;
      locationEl.innerHTML = `
        <span class="font-bold">Location: </span>${city}, ${state}
      `;
      ageEl.innerHTML = `
        <span class="font-bold">Age: </span>${age}
      `;
    });
}

fetchUser();
