// Generators are Used to Create or Generate Iterators
// Functions that Can Be Paused and Resumed Using Yield

function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const teams = ["Giants", "Yankees", "Red Sox", "Astros"];

const iterator = createTeamIterator(teams);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const team of createTeamIterator(teams)) {
//   console.log(team);
// }

// Use Spread Operator ... to Create an Array of Teams
console.log([...createTeamIterator(teams)]);

// Use Destructuring with Iterator/Generator
const [first, second, third, fourth] = createTeamIterator(teams);

console.log(first, second, third, fourth);
