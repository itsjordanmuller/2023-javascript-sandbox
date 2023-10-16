const sym = Symbol();
const sym1 = Symbol("foo");
const sym2 = Symbol("bar");

console.log(sym, sym1, sym2);

console.log(typeof sym);

// Returns foo
console.log(sym1.description);
// Undefined - sym has No Description
console.log(sym.description);

// Returns false Symbols are Always Unique
console.log(Symbol("sym") === Symbol("sym"));

const user = {
  [Symbol("id")]: 1,
  name: "John Doe",
  email: "john@gmail.com",
};

console.log(user);

console.log(user[Symbol("id")]);

// Symbols are NOT Enumerable
console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
  console.log(key);
}

// getOwnPropertySymbols to Get [Symbol(id)]
console.log(Object.getOwnPropertySymbols(user));

// Symbol.for() - .for Uses Global Registry
const sym3 = Symbol.for("foo");
const sym4 = Symbol.for("foo");

// Returns true since .for was used making the values accessible
console.log(sym3 === sym4);

console.log(Symbol.keyFor(sym3));
// Shows as Undefined Since .for Wasn't Used
console.log(Symbol.keyFor(sym1));

// Convert Symbol to String
console.log("String:", sym1.toString());
console.log("String:", sym2.toString());
console.log("String:", sym.toString());

// Get Value of Symbol
console.log("Value:", sym1.valueOf());
console.log("Value:", sym2.valueOf());
console.log("Value:", sym.valueOf());
