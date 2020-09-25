const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wrkoutSchema = new Schema({
    workoutCreated:{
        type: Date,
        default: Date.now
    },
    Workouts:[
        {   
            name: { String, trim: true},
            type: { String, trim: true},
            duration: { Number },
            Weight: {Number},
            Reps: {Number},
            sets:{Number},
            distance:{Number}
        }
    ]
});

const wrkout = mongoose.model("Workouts", wrkoutSchema);

module.exports = wrkout;
