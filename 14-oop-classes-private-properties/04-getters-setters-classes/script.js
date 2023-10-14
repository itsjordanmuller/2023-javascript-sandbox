class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  //   get firstName() {
  //     return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
  //   }

  //   get lastName() {
  //     return this._lastName.charAt(0).toUpperCase() + this._lastName.slice(1);
  //   }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person1 = new Person("john", "doe");
console.log(person1);

// Capitalized Because of Get
console.log(person1.firstName);

// Undefined Without Get
console.log(person1.lastName);

// Shows Value Because it was Set
person1.firstName = "joe";
person1.lastName = "smith";
console.log(person1.firstName);

console.log(person1.fullName);
