const Sequelize = require("sequelize");

// Ce atribute vreau sa afisez din tabela de proiecte, si in ce ordine
module.exports = (sequelize, Sequelize) => {
    const Projects = sequelize.define("project", {
        Project_name: {
            type: Sequelize.STRING,
        },
        Start_date: {
            type: Sequelize.DATE,
        },
        Planned_end_date: {
            type: Sequelize.DATE,
        },
        Description: {
            type: Sequelize.STRING,
        },
        Project_code: {
            type: Sequelize.INTEGER,
        },
    });
    return Projects;
};