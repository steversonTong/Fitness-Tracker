const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", async (req, res) => {
  try {
    Workout.find().then((dbWorkout) => {
      res.json(dbWorkout);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    Workout.find().then((dbWorkout) => {
      res.json(dbWorkout);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/api/workouts", async ({ body }, res) => {
  try {
    Workout.create({}).then((dbWorkout) => {
      res.json(dbWorkout);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/api/workouts/:id", async ({ body, params }, res) => {
  try {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
