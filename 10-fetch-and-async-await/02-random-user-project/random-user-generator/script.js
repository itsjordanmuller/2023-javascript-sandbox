const generateBtn = document.getElementById("generate");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const locationEl = document.getElementById("location");
const ageEl = document.getElementById("age");

function fetchUser() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      nameEl.innerHTML = `
        <span class="font-bold">Name: </span>${data.results[0]["name"]["first"]} ${data.results[0]["name"]["last"]}
    `;
      emailEl.innerHTML = `
        <span class="font-bold">Email: </span>
                ${data.results[0]["email"]}
        `;
      phoneEl.innerHTML = `
        <span class="font-bold">Phone: </span> ${data.results[0]["phone"]}
    `;
      locationEl.innerHTML = `
      <span class="font-bold">Location: </span> ${data.results[0]["location"]["city"]} ${data.results[0]["location"]["state"]}
    `;
      ageEl.innerHTML = `
      <span class="font-bold">Age: </span> ${data.results[0]["dob"]["age"]}
    `;
    });
}

fetchUser();
