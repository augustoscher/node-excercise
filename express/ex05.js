const express = require('express');
const server = express();


const port = 3003;
server.listen(port, () => console.log(`Running on port ${port}`));