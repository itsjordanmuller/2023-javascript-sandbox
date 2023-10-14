function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

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
}

Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const person1 = new Person("john", "doe");
console.log(person1.firstName, person1.lastName);
