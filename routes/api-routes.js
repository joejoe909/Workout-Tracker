const router = require("express").Router();
const mongoose = require("mongoose");
const express = require("express");
const wo = require("../models/workout");

router.get("/api/workouts", (req, res)=>{
    //from getLastWorkout() in /public/api.js
    console.log("api-routes.js L8")
    wo.find({}).sort({day: 1})
    .then(woDb => { res.json(woDb);
    }).catch(err=> { 
          res.status(400).json(err);
    });
});
router.post("/api/workouts", ({body}, res) =>{
    //from createWorkout()
    console.log("api-routes.js L17")
    wo.create(body).then(woDb =>{
        res.json(woDb);
    }).catch(err => {
        res.status(400).json(err);
    });
});

//completed workouts
router.post("/api/workouts", (req, res) =>{
    console.log("api-routes.js 27")
    wo.insertMany(body).then(woDb =>{
        res.json(woDb);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// update workouts
router.put("/api/workouts/:id", (req, res) => {
    //from addExercise()
    console.log("l45 api-routes.js");
    wo.update(
        { _id: req.params.id },
        { $set: { exercises: [req.body] } }
    ).then((woDb) => {
        res.json(woDb);
    });
});


// range page when user clicks dashboard this is fired from getWorkoutsInRange()
router.get("/api/workouts/range", (req, res) =>{
    console.log("l56 api-routes.js");
    wo.find({}).then(woDb => {
        res.json(woDb);
    }).catch(err =>{
        res.status(400).json(err);
    });
});

module.exports = router;