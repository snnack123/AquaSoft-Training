const Sequelize = require("sequelize");
const db = require("../config/database");

// Ce atribute vreau sa afisez din tabela angajati, si in ce ordine
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

// Transmit ceea ce am extras catre alta pagina
module.exports = Employees;