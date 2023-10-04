// AND - First Isn't True, So the Whole Thing is False
console.log(10 > 20 && 30 > 15 && 40 > 30);

// OR - Only One Needs to Be True
console.log(10 > 20 || 30 > 15);

// && will return first falsy value or the last value
let a;

// Returns Last Value
a = 10 && 20;
a = 10 && 20 && 30;

// Returns First Falsy Value
a = 10 && "" && 0 && 30;
a = 10 && 0 && 30;

console.log(a);

const posts = ["Post 1", "Post 2"];
// Common Way of Using && Operator, Returns Last Value Since Expression Evaluates to False
posts.length > 0 && console.log(posts[0]);

// || Will return the first truthy value or the last value
let b;

// Returns First Truthy Value
b = 10 || 20;
b = 0 || 20;

// Returns the Last Value
b = 0 || null || undefined;

console.log(b);

// ?? Returns the right side operand when the left is null or undefined - Known as a Nullish Coalescing Operator
let c;

// Returns Left Side Since Left Side is Not Null or Undefined
c = 10 ?? 20;
c = "" ?? 30;

// Returns the Right Side Since Left is Null/Undefined
c = null ?? 20;
c = undefined ?? 30;

console.log(c);
