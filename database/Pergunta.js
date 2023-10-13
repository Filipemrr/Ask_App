const sequelize = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('TABELA_PERGUNTAS',{
    titulo:{
        type: sequelize.STRING,//TEXTOS CURTOS
        allowNull: false,
    },
    descricao:{
        type: sequelize.TEXT,//TEXTOS LONGOS
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {console.log("tabela  criada")}) // force: false eh para nao forçar a criaçao da tabela caso ela ja tenha sido criada, impede repeticoes.

module.exports = Pergunta;