const router = require("express").Router();
const mongoose = require("mongoose");
const wo = require("../models/wrkout.js");

router.get("/api/workouts", (req, res)=>{
    wo.find({}).sort({dat: 1}).then(woDb =>{
    }).catch(err=>{
        res.status(400).json(err);
    });
});




module.exports = router;