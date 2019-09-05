process.stdout.write('Oi, tudo bem? ')
process.stdin.on('data', (data) => {
  process.stdout.write(`Sua resposta: ${data.toString()}. Obg.`)
  process.exit();
})