const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", async (req, res) => {
    let allWorkouts = await Workout.find({});

    allWorkouts.forEach(obj => {
        obj.totalDuration = obj.exercises.reduce((acc, val) => {
            return acc + val.duration;
        }, 0);
    });

    console.log(allWorkouts);
    res.json(allWorkouts);
})

router.post("/workouts", async(req, res) => {
    let newWorkout = await Workout.create({});
    res.json(newWorkout);
})

router.put("/workouts/:id", async(req, res) => {
    let id = req.params.id; 

    let workout = await Workout.findById(id);

    workout.exercises = [...workout.exercises, req.body];

    console.log(workout.exercises);

    let newExercise = await workout.save();
    
    res.json(newExercise);
});

router.get("/workouts/range", async(req, res) => {
    let rangeWorkouts = await Workout.find({});
    res.json(rangeWorkouts);
});

module.exports = router;