//Express Routes
let router = require("express").Router();
//Access static files
let path = require("path");

// module.exports = function(app){
// creates html routes
router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// }
module.exports = router;