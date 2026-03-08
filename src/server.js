require('reflect-metadata');
require('dotenv').config();
const ApiDataSource = require('./database/databaseConfig');
const express = require('express');
const router = require('./routes/Routes');


const app = express();

app.use(express.json());
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ message: 'JSON inválido no corpo da requisição' });
    }
    next();
});
app.use(router);


const PORT = process.env.PORT || 3000;

ApiDataSource.initialize()
  .then(() => {
    console.log('Conexão com Banco de Dados realizada com sucesso!');

    app.listen(PORT, () => {
        console.log(`Servidor rodando em: http://localhost:${PORT}`);
    });
    
  }).catch((error) => console.log("Erro na conexão ao banco de dados", error))


