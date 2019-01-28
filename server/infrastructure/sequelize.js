
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    host: '',
    database: '',
    username: '',
    password: '',
    dialect: '',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false,

});

module.exports.Sequelize = Sequelize;
module.exports.connection = sequelize;
