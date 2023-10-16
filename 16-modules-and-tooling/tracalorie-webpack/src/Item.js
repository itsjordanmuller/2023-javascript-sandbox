class Meal {
  constructor(name, calories) {
    this.id = `M-${Date.now()}`;
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = `W-${Date.now()}`;
    this.name = name;
    this.calories = calories;
  }
}

export { Meal, Workout };
