const numbers = [1, 2, 3, 4, 5];

// Loop Through Array with map
const doubleNumbers = numbers.map((number) => number * 2);

console.log(doubleNumbers);

// Same with forEach
const doubleNumbers2 = [];

numbers.forEach((number) => {
  doubleNumbers2.push(number * 2);
});

console.log(doubleNumbers2);

const companies = [
  { name: "Company 1", category: "Finance", start: 1981, end: 2004 },
  { name: "Company 2", category: "Retail", start: 1992, end: 2008 },
  { name: "Company 3", category: "Auto", start: 1999, end: 2007 },
  { name: "Company 4", category: "Retail", start: 1989, end: 2010 },
  { name: "Company 5", category: "Technology", start: 2009, end: 2014 },
  { name: "Company 6", category: "Finance", start: 1987, end: 2010 },
  { name: "Company 7", category: "Auto", start: 1986, end: 1996 },
  { name: "Company 8", category: "Technology", start: 2011, end: 2016 },
  { name: "Company 9", category: "Retail", start: 1981, end: 1989 },
];

// Create an Array of Company Names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an Array with Just Company & Category
const companyAndCategory = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyAndCategory);

// Create an Array of the Name & Length of Each Company in Years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start,
  };
});
console.log(companyYears);

// Chain map Methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);
console.log(squareAndDouble);

// Longer Version of Above
const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  });
console.log(squareAndDouble2);
