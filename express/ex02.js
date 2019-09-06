const express = require('express');
const server = express();

server.get('/', (req, res, next) => {
  console.log('inicio');
  next();
  console.log('fim');
});

server.get('/', (req, res) => {
  console.log('Resposta...');
  res.send('<h1>Olá express</h1>');
});


const port = 3003;
server.listen(port, () => console.log(`Running on port ${port}`));