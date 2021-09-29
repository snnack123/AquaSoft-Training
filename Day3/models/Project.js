const Sequelize = require("sequelize");
const db = require("../config/database");

// Ce atribute vreau sa afisez din tabela de proiecte, si in ce ordine
const Projects = db.define("project", {
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

// Transmit ceea ce am extras catre alta pagina
module.exports = Projects;