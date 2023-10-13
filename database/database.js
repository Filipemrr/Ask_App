const Sequelize = require('sequelize');
const connection = new Sequelize('perguntas', 'root', 'filipe2004', {
    host: 'localhost', 
    dialect: 'mysql',
    logging: false
});

module.exports= connection;