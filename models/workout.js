const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        required: "Enter an exercise name",
        trim: true,
      },
    },
    {
      type: {
        type: String,
        required: "Enter an exercise type",
        trim: true,
      },
    },
    {
      duration: {
        type: Number,
        required: "Enter an exercise duration",
      },
    },
    {
      weight: {
        type: Number,
      },
    },
    {
      sets: {
        type: Number,
      },
    },
    {
      reps: {
        type: Number,
      },
    },
    {
      distance: {
        type: Number,
      },
    },
  ],
});

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
