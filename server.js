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
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));
//init the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

