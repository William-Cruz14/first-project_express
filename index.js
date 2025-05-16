const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<center><h2>Olá bem-vindo ao meu primeiro app servidor Express!<h2><center>');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});