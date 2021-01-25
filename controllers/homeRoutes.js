const router = require("express").Router();
const db = require("../models/workout");

router.get("/", (req, res) => {
  db.Workout.find({})
    .populate("exercises")
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/exercise", (req, res) => {
  res.status(200).json("All Good.");
});

module.exports = router;
