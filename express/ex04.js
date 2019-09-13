const express = require('express');
const server = express();

server.route("/clientes")
  .get((req, res) => res.send('Lista de clientes'))
  .post((req, res) => res.send('Novo cliente'))
  .put((req, res) => res.send('Atualização de cliente'))
  .delete((req, res) => res.send('Exclui cliente'))

const port = 3003;
server.listen(port, () => console.log(`Running on port ${port}`));