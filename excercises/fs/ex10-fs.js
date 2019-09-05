const fs = require('fs');

// __dirname constante padrão do nome
//__filename mesma coisa
const files = fs.readdirSync(__dirname);
files.forEach(f => console.log(f));