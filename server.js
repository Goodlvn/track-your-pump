require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./models/workout");
const workoutSeed = require("./seeders/seed");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitTracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Workout.deleteMany({})
//     .then(() => Workout.collection.insertMany(workoutSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });

app.use(require("./routes/html-routes.js"));
app.use("/api", require("./routes/api-routes.js"));


app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});