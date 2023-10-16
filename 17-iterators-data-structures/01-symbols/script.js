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
