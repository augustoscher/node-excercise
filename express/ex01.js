const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.send('<h1>Agora temos express</h1>');
});

server.all('/teste', (req, res) => {
  //server.all funciona para get, post, delete...
  res.send('<h1>teste</h1>');
});

server.get(/api/, (req, res) => {
  //mapeia com expressão regular
  res.send('<h1>API</h1>')
});

const port = 3003;
server.listen(port, () => console.log(`Running on port ${port}`));