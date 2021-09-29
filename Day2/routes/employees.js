const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Employee = require("../models/Employee");

router.get("/", (req, res) =>
    Employee.findAll()
    .then((employees) => {
        console.log(employees);
        res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;