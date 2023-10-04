function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  // Can't Access Nested Scopes, Only Parent Scopes
  // console.log(y);

  // First Wont Run Without Second Being Called Inside
  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  // console.log(x + y);
}
