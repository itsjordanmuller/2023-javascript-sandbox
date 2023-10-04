const d = new Date(10, 30, 2022, 13, 0, 0);
const hour = d.getHours();

// If, Else If, and Else
if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good night!");
}
