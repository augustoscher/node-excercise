const { deepStrictEqual, ok } = require('assert');
const Order = require('../Order');

describe('Order class test suite', () => {
  
  let order;

  beforeEach(() => {
    order = new Order();
  });

  it('items array should be empty', () => {
    deepStrictEqual(order.items.length, 0);
  });

  describe('when item is added', () => {
    it('items array should be 1', () => {
      order.addItem({ id: 1, name: 'Test' });

      deepStrictEqual(order.items.length, 1);
    });

    it('items array should be 2', () => {
      order.addItem({ id: 1, name: 'Test' });
      order.addItem({ id: 2, name: 'Test2' });

      deepStrictEqual(order.items.length, 2);
    });

    it('items array should be 0 when item is added and removed', () => {
      order.addItem({ id: 1, name: 'Test' });
      deepStrictEqual(order.items.length, 1);
      
      order.removeItem({ id: 1});
      deepStrictEqual(order.items.length, 0);
    });
  });
})