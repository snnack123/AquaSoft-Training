const Sequelize = require("sequelize");
const db = require("../config/database");

const Employees = db.define("employee", {
    Name: {
        type: Sequelize.STRING,
    },
    Adress: {
        type: Sequelize.STRING,
    },
    Email: {
        type: Sequelize.STRING,
    },
    Hire_date: {
        type: Sequelize.STRING,
    },
    Salary: {
        type: Sequelize.STRING,
    },
    Job_Title: {
        type: Sequelize.STRING,
    },
});

module.exports = Employees;