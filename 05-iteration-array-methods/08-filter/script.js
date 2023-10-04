// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Default Way of Writing Filter with Function
// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// Shorter Version with Arrow Function & No Brackets
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Same But Much Longer with forEach
// const evenNumbers = [];
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// console.log(evenNumbers);

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

// Get Only Retail Companies
const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);
console.log("Retail Companies: ", retailCompanies);

// Get Only Companies Started in or After 1980 and Ended in or Before 2005
const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
console.log("Early Companies: ", earlyCompanies);
