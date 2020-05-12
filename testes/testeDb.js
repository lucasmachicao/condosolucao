const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const dbConn = new Sequelize(dbConfig);
const {Usuario, Condominio}= require("../models");


Condominio.max("id").then(id_cond=>{
    Usuario.create({
        nome:'aa',
        email:'aaa',
        senha:'aaaa',
        telefone:id_cond,
        apto:0,
        condominios_id: 20
       
    }).then(function () {
        console.log("usuario cadastrado!!")
    }).catch(function (erro) {
        console.log("algo deu errado!!" + erro)
    });
})







Condominio.findOne({
    Condominio.max("create_time")
})