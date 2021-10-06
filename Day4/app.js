const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Database
const db = require("./models");

const app = express();
app.use(bodyParser.json()); // Stie sa interpreteze obiectul trimis

app.get("/", (req, res) => res.send("INDEX"));

app.use("/employees", require("./routes/employees"));
app.use("/projects", require("./routes/projects"));

// Localhost port to test app
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
app.use(express.json());
/*
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/api/insert", (req, res) => {
    const Name = req.body.Name;
    const Adress = req.body.Adress;
    const Email = req.body.Email;
    const Hire_date = req.body.Hire_date;
    const Salary = req.body.Salary;
    const Job_Title = req.body.Job_Title;
    const projectId = req.body.projectId;

    const sqlInsert =
        "INSERT INTO employees (Name, Adress, Email, Hire_date, Salary, Job_title, projectId) VALUES (?,?,?,?,?,?,?)";
    db.sequelize.query(
        sqlInsert, [Name, Adress, Email, Hire_date, Salary, Job_Title, projectId],
        (err, result) => {
            console.log(err);
        }
    );
});*/

db.sequelize.sync();

module.exports = db;