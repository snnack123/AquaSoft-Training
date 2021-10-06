const Sequelize = require("sequelize");
// Ce atribute vreau sa afisez din tabela angajati, si in ce ordine
module.exports = (sequelize, Sequelize) => {
    const Employees = sequelize.define("employee", {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
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
            type: Sequelize.DATE,
        },
        Salary: {
            type: Sequelize.STRING,
        },
        Job_Title: {
            type: Sequelize.STRING,
        },
        projectId: {
            type: Sequelize.INTEGER,
        },
    });
    return Employees;
};

// Transmit ceea ce am extras catre alta pagina