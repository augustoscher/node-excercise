const express = require('express');
const server = express();
const router = require('./ex05_routes');

server.use('/api', router);

const port = 3003;
server.listen(port, () => console.log(`Running on port ${port}`));