const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect()
    .then((MONGO_URL) => console.log("Conexão ao MongoDB efetuada com sucesso!"))
    .catch(err => console.log("Erro ao conectar ao MongoDB"));

module.exports = mongooseConnection;