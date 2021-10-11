const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./models");

db.sequelize.sync();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Database

app.get("/", (req, res) => res.send("INDEX"));

app.use("/employees", require("./routes/employees"));
app.use("/projects", require("./routes/projects"));
app.use("/accounts", require("./routes/accounts"));
// Localhost port to test app
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = db;