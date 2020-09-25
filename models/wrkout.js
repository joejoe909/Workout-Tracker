const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wrkoutSchema = new Schema({
    workoutCreated:{
        type: Date,
        default: Date.now
    },
    duration: Number,
    amountPerfromed: Number,
    TotalWeightLifted: Number,
    TotalSets: Number,
    TotalReps: Number,
    TotalDistance:Number

});

const wrkout = mongoose.model("Workouts", wrkoutSchema);

module.exports = wrkout;
