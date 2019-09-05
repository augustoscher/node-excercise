const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"})
  res.end('<h1>Melhor usar o express!</h1>')
});

const port = 3456;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});