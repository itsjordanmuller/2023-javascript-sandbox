// Constructor Function
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  // use defineProperty() to Define Getters & Setters
  Object.defineProperty(this, "firstName", {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value.toUpperCase;
    },
  });

  Object.defineProperty(this, "lastName", {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = value.toUpperCase;
    },
  });

  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    },
  });
}

// Create a Method on the Constructor Function Prototype
Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const person1 = new Person("john", "doe");
// console.log(person1.firstName, person1.lastName);
console.log(person1.fullName);

// Object Literal
const PersonObj = {
  _fName: "jane",
  _lName: "doe",

  get fName() {
    return Person.prototype.capitalizeFirst(this._fName);
  },

  set fName(value) {
    this._fName = value;
  },

  get lName() {
    return Person.prototype.capitalizeFirst(this._lName);
  },

  set lName(value) {
    this._lName = value;
  },

  get full() {
    return this.fName + " " + this.lName;
  },
};

const person2 = Object.create(PersonObj);
// console.log(person2.fName, person2.lName);
console.log(person2.full);
