require('dotenv').config();
// const app = require('./app');
const express = require('express');
const routes = require('./routes/Routes');


const app = express();

app.use(express.json());
app.use(routes);


const PORT = process.env.PORT;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Ocorreu um erro interno no servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});



app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
