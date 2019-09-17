const express1 = require('express');
const express2 = require('express');

//true
console.log(express1 === express2);

const srv1 = express1();
const srv2 = express1();

//false - sempre retorna uma instancia diferente
console.log(srv1 === srv2);

const router1 = express1.Router();
const router2 = express1.Router();

//false - instancias diferentes
console.log(router1 === router2);