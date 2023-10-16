const poll = new Map();
poll.set("React", 6);
poll.set("Vue", 5);
poll.set("Angular", 4);
poll.set("Svelte", 3);
poll.set("Other", 1);

function submitForm(e) {
  e.preventDefault();

  const selectedOption = document.querySelector(
    "input[name='poll-option']:checked"
  );

  if (!selectedOption) {
    alert("Please select an option.");
    return;
  }

  let voteCount = poll.get(selectedOption.value);
  poll.set(selectedOption.value, voteCount + 1);

  displayResults();

  // Disable Form Fields After Submit
  document
    .getElementById("poll-form")
    .querySelectorAll("input, button")
    .forEach((el) => el.setAttribute("disabled", true));
}

function displayResults() {
  const results = document.getElementById("results");
  results.innerHTML = "";
  for (let [option, votes] of poll) {
    const optionEl = document.createElement("div");
    optionEl.classList.add(
      "border-bottom",
      "p-2",
      "d-flex",
      "justify-content-between"
    );
    optionEl.innerHTML = `<strong>${option}: </strong> ${votes} votes`;
    results.appendChild(optionEl);
  }
}

document.getElementById("poll-form").addEventListener("submit", submitForm);
