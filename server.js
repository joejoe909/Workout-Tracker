const logger = require("morgan");
const chalk = require("chalk");
const mongoose = require("mongoose");
const express = require("express");


const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wtDb",{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


//routes
app.use(require("./routes/api-route.js"));
app.use(require("./routes/html-route.js"));
//init the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

