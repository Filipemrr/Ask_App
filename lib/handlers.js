const express = require('express');
const Pergunta = require('../database/Pergunta')
const Resposta = require('../database/Resposta')


exports.perguntas = (req,res) => res.render('perguntar');

exports.home = (req,res) => {
    Pergunta.findAll({ raw: true, order:[
        ['id','DESC'] // ASC = Crescente, DESC = Decrescente
    ]}).then( pergunta => {
        res.render('index',{
            perguntas: pergunta
        });
    });
}
exports.salvarpergunta = (req,res) => {
    Pergunta.create({
        titulo: req.body.Titulo,
        descricao: req.body.Descricao
    }).then(() => {
        res.redirect("/");
    });
}

exports.PerguntaPorId = (req, res) => {
    var id_param = req.params.id;
    Pergunta.findOne({
        where: { id: id_param }
    }).then(pergunta => {
        if (pergunta != undefined) { // pergunta encontrada
            Resposta.findAll({
                where: { perguntaID: id_param }
            }).then(respostas => {
                res.render('pergunta',{ 
                    pergunta: pergunta, 
                    respostas: respostas 
                });
            });
        } else { // pergunta não encontrada
            res.redirect('/');
        }
    });
}


exports.salvarresposta = (req,res) => {
    var corpo = req.body.corpo 
    var pergunta_id = req.body.pergunta_id
    Resposta.create({
        corpo: corpo, 
        perguntaID: pergunta_id
    }).then( () => {
        res.redirect("/pergunta/"+pergunta_id);
    });
}

