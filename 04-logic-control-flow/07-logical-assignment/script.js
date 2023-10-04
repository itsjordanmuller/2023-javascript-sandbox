// ||= Assigns the Right Side Value Only if the Left is a Falsy Value

let a = false;

// Normal If Statement
if (!a) {
  a = 10;
}

// Compact Using OR
a = a || 10;

// Even Smaller Using ||=
a ||= 10;

console.log(a);
