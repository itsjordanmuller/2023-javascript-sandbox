class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
  }

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
  }
}

class Meal {
  constructor(name, calories) {
    this.id = `M-${Date.now()}`;
    this.name = name;
    this.calories = calories;
  }
}

console.log(`M-${Date.now()}`);

class Workout {
  constructor(name, calories) {
    this.id = `W-${Date.now()}`;
    this.name = name;
    this.calories = calories;
  }
}
