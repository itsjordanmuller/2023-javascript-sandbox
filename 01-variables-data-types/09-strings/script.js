let x;

const name = "Jordan";
const age = 23;

// x = "Hello, my name is " + name + " and I am " + age + " years old";

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = new String("Hello World!");

x = typeof s;
x = s.length;

// Access Value by Key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("d");

x = s.substring(0, 5);
x = s.substring(6);

x = s.slice(-12, -7);

x = x.trim();

x = s.replace("World", "Jordan");

x = s.includes("Hello");

x = s.valueOf();

x = s.split(" ");

console.log(x);
