const Sequelize = require("sequelize"); // importez modului sequelize
const sequelize = new Sequelize("aquasoft", "root", "5630", {
    // Datele user-ului
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false, // Ii spunem sistemului sa caute numai randurile dintr-o tabela pe care noi le precizam
    },
    pool: {
        max: 5, // Numarul maxim de incercari de conectare
        min: 0, // Numarul minim de incercari de conectare
        acquire: 30000, // Timpul in milisecunde pentru care sistemul il aloca conectarii la baza de date. Daca acest timp trece, apare o eroare
        idle: 10000, // Timpul maxim, in milisecunde in care conexiunea poate fi inactiva inainte sa fie inchisa
    },
});
const db = {}; // Sa leg toate modelele si sa exportez cu totul
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.employee = require("./Employee")(sequelize, Sequelize); //trimit paramterii
db.project = require("./Project.js")(sequelize, Sequelize); //trimit paramterii
db.employee.belongsTo(db.project, {
    targetKey: "id",
    foreignKey: "projectId",
});

//target key - cheia de care vreau sa ma leg
//foreign key - cheia cu care te legi
module.exports = db;