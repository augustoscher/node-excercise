const Order = require('./Order');

const o = new Order();
console.log('o: ', o)

o.addItem({ id: 1, name: 'Test'})
console.log('o: ', o)

o.removeItem({ id: 1, name: 'Test'})
console.log('o: ', o)