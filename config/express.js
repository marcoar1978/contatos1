


//Arquivos configuração
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

var api_rotas = require('../api/rotas');


app.get('/produtos',api_rotas.listaJson);


module.exports = app;