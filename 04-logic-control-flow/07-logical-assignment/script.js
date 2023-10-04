// ||= Assigns the Right Side Value Only if the Left is a Falsy Value

let a = false;

// Normal If Statement
if (!a) {
  a = 10;
}

// Compact Using ||
a = a || 10;

// Even Smaller Using ||=
a ||= 10;

console.log(a);

// &&= Assigns the Right Side Value Only if the Left is a Truthy Value

let b = 20;

if (b) {
  b = 30;
}

// Compact Using &&
b = b && 30;

// Even Smaller Using &&=
b &&= 30;

console.log(b);

// ??= Assigns the Right Side Value Only if the Left is null or Undefined

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

// Compact Using ??
c = c ?? 30;

// Even Smaller Using ??=
b ??= 30;

console.log(c);
