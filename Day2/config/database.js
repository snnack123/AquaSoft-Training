const Sequelize = require("sequelize");
module.exports = new Sequelize("aquasoft", "root", "5630", {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false,
    },
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});