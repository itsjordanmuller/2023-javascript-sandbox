// Break Out of a Loop
// for (let i = 0; i <= 20; i++) {
//   if (i === 15) {
//     console.log("Breaking...");
//     break;
//   }
//   console.log(i);
// }

// Continue to Skip Current Iteration and Move to Next Iteration
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("Skipping 13...");
    continue;
  }

  console.log(i);
}
