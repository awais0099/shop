const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop', 'root', 'open', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;