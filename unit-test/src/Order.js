class Order {
  constructor(){
    this.items = [];
  }

  addItem(item){
    this.items.push(item);
  }

  removeItem(item){
    this.items = this.items.filter(i => i.id !== item.id);
  }
}

module.exports = Order;