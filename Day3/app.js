const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// Database

const db = require("./config/database");

// Test if DataBase is Connected
db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch((err) => console.log("Error", err));

const app = express();
app.use(bodyParser.json()); // Stie sa interpreteze obiectul trimis

app.get("/", (req, res) => res.send("INDEX"));

app.use("/employees", require("./routes/employees"));
app.use("/projects", require("./routes/projects"));

// Localhost port to test app
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));