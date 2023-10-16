const app = {
  nextIndex: 0,
  teams: ["Giants", "Yankees", "Red Sox", "Astros"],
  next() {
    if (this.nextIndex >= this.teams.length) {
      return { done: true };
    }

    const returnValue = { value: this.teams[this.nextIndex], done: false };
    this.nextIndex++;
    return returnValue;
  },
};

console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());
