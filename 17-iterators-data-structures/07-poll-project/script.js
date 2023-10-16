const poll = new Map();
poll.set("React", 0);
poll.set("Vue", 0);
poll.set("Angular", 0);
poll.set("Svelte", 0);
poll.set("Other", 0);

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

  console.log(poll);
}

document.getElementById("poll-form").addEventListener("submit", submitForm);
