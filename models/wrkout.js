const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wrkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: { type: String, trim: true, required: "What is the type of exercise?" },
            name: { type: String, trim: true, required: "What is the name of the exercise?"},
            duration: { type: Number, required: "What is the duration of the exercise?" },
            Weight: { type: Number },
            Reps: { type: Number },
            sets: { type: Number },
            distance: { type: Number }
        }
    ]
});

const wrkout = mongoose.model("Workouts", wrkoutSchema);

module.exports = wrkout;