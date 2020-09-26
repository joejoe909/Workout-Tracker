const router = require("express").Router();
const mongoose = require("mongoose");
const express = require("express");

const wo = require("../models/wrkout.js");

//from api.js getLastworkout()
router.get("/api/workouts", (req, res)=>{
    wo.find({}).sort({day: 1})
    .then(woDb => { res.json(woDb);
    }).catch(err=> { 
          res.status(400).json(err);
    });
});

router.post("/api/workouts", ({body}, res) =>{
    wo.create(body).then(woDb =>{
        res.json(woDb);
    }).catch(err => {
        res.status(400).json(err);
    });
});

//completed workouts
router.post("/api/workouts", (req, res) =>{
    wo.insertMany(body).then(woDb =>{
        res.json(woDb);
    }).catch(err => {
        res.status(400).json(err);
    });
});

//update workouts
router.post("/api/workouts/:id", (req, res) =>{
    wo.update(
        { _id: req.params.id},
        { $set: {excercise: [req.body]} }
        ).then((woDb) => {
            res.json(woDb);
        });
});

//range page
router.get("/api/workouts/range", (req, res) =>{
    wo.find({}).then(woDb => {
        res.json(woDb);
    }).catch(err =>{
        res.status(400).json(err);
    });
});

module.exports = router;