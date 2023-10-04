// Hoisting Allows A Regular Function Declaration to Be Used Before the Function is Defined In Code
console.log(addDollarSign(10));

// Function Declaration
function addDollarSign(value) {
  return "$" + value;
}

// Expressions Are Not Available Until Set
// console.log(addPlusSign(50));

// Function Expression
const addPlusSign = function (value) {
  return "+" + value;
};
