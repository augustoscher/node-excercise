const Utils = require('./ex3-singleton');
const Utils2 = require('./ex3-singleton');

//aponta para mesma instancia, vai incrementando o contador interno
Utils.exibirProximo();
Utils2.exibirProximo();
Utils.exibirProximo();
Utils2.exibirProximo();
