const express = require('express');
const routes = express.Router();

routes.use((req, res, next) => {
  const init = Date.now();
  next();
  console.log(`Tempo: ${Date.now() - init } ms.`);
});

routes.get('/produtos/:id', (req, res) => {
  res.json({id: req.params.id, name: 'Caneta'})
});

routes.get('/clientes/:id/:name', (req, res) => {
  res.json({id: req.params.id, name: req.params.name})
});

module.exports = routes; 