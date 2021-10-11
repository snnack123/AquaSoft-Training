const Sequelize = require("sequelize");

// Ce atribute vreau sa afisez din tabela de proiecte, si in ce ordine
module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("account", {
        Name: {
            type: Sequelize.STRING,
        },
        Username: {
            type: Sequelize.STRING,
        },
        Password: {
            type: Sequelize.STRING,
        },
        Email: {
            type: Sequelize.STRING,
        },
        Adress: {
            type: Sequelize.STRING,
        },
    });
    return Account;
};