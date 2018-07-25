export default class Order {
  constructor(data) {
    this.id = data.id;
    this.products = data.products || [];
    this.date = data.date;
    this.total = data.total;
    this.created_at = data.created_at;
  }
}
