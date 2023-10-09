function fetchUser() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const gender = data.results[0]["gender"];
      const firstName = data.results[0]["name"]["first"];
      const lastName = data.results[0]["name"]["last"];
      const email = data.results[0]["email"];
      const phone = data.results[0]["phone"];
      const city = data.results[0]["location"]["city"];
      const state = data.results[0]["location"]["state"];
      const age = data.results[0]["dob"]["age"];
      console.log(gender, firstName, lastName, email, phone, city, state, age);
    });
}

fetchUser();
