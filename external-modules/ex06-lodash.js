const _ = require('lodash');

const alunos = [{
    name: 'Joao',
    nota: 7.8
  }, {
    name: 'Maria',
    nota: 9
  }, {
    name: 'Pedro',
    nota: 8
  }]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media);
