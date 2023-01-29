const Sequelize = require('sequelize');
const connection = require('../database/database')

const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.TEXT,
        allowNull: false 
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false 
    }
})

Pergunta.sync({force: false}).then(()=>{console.log('tabela criada')})

module.exports = Pergunta;