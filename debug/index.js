//express debug dependency
const log = require('debug')('api:main');
const app = require('express')();
const { sum } = require('./math');

//middleware to use in all app
app.use((request, response, next) => {
  log(request.query, `request at: ${new Date().toISOString()}`)
  return next();
});

app.get('/', (request, response) => {
  return response.send('Hello Word!')
});

app.get('/sum', (request, response) => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  const res = sum(num1, num2);
  return response.send(`Sum of ${num1} + ${num2} is ${res}`);
});

const port = 3003;
app.listen(port, () => log(`Running on port ${port}`));