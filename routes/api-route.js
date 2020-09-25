const router = require("express").Router();
const mongoose = require("mongoose");
const wo = require("../models/wrkout.js");

//from api.js getLastworkout()
router.get("/api/workouts", (req, res)=>{
    wo.find({}).sort({day: 1}).then(woDb =>{
    }).catch(err=>{
        res.status(400).json(err);
    });
});
//from api.js addExercise()
router.put("/api/workouts/", ({body}, res)=>{
    wo.create(body).then(woDb =>{
        res.json(woDb);
    }).catch(err => {
        res.status(400).json(err);
    });
});








module.exports = router;