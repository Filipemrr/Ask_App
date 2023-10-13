const express = require('express');
const app = express();
const handlers = require('./lib/handlers')
const connection = require('./database/database');
//database test connection
connection.authenticate()
    .then(() => {
        console.log("Conexao feita com o banco de dados")
    })
    .catch((Error) => {
        console.log(Error);
    })

//setando ejs como view engine padrao
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true} ));
app.use(express.json());


app.get('/', handlers.home);

app.get('/perguntar', handlers.perguntas);
app.post('/SalvarPergunta', handlers.salvarpergunta);
app.get('/pergunta/:id', handlers.PerguntaPorId);
app.post('/SalvarResposta', handlers.salvarresposta);

app.listen(8080, () => {
    console.log("Servidor Rodando na porta 8080");
})