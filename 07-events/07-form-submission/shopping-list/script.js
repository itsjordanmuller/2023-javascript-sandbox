const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();

  // Get Value using .value
  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;

  // Basic Form Validation
  if (item === "" || priority === "0") {
    alert("Please fill in all fields.");
    return;
  }

  console.log(item, priority);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const item = formData.get("item");
  const priority = formData.get("priority");

  console.log(item, priority);

  //   const entries = formData.entries();

  //   for (let entry of entries) {
  //     console.log(entry);
  //   }

  //   console.log(entries);
}

// On Submit
form.addEventListener("submit", onSubmit2);
