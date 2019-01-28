const { Sequelize, connection } = require('./sequelize');

const Mail = connection.define('Mail', {
    id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    company: Sequelize.STRING,
    phone: Sequelize.STRING,
    title: Sequelize.STRING,
    text: Sequelize.STRING,
    date: Sequelize.DATE
},
    {
        timestamps: false
    });

module.exports.CreateMail = function (mail) {
    return Mail.create(mail);
}
