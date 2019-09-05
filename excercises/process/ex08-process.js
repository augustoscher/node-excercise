//executar: node ex08-process.js --producao outro param
console.log(process.argv);

const temParam = (param) => {
  return process.argv.indexOf(param) !== -1
}

if (temParam("--prod")) {
  console.log("prod")
} else {
  console.log("not prod")
}