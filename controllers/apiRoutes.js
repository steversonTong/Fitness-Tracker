const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workout", async (req, res) => {
  try {
    Workout.find().then((dbWorkout) => {
      res.json(dbWorkout);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/api/workout/range", async (req, res) => {
  try {
    Workout.find().then((dbWorkout) => {
      res.json(dbWorkout);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/api/workout", async ({ body }, res) => {
  try {
    Workout.create({}).then((dbWorkout) => {
      res.json(dbWorkout);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/api/workout/:id", async ({ body, params }, res) => {
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
