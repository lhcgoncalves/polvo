import { server } from "./../config/axios";

const OrderService = (() => {
  function getAll() {
    return server.get("/orders");
  }

  function create(order) {
    return server.post("/orders", order);
  }

  function read(id) {
    return server.get(`/orders/${id}`);
  }

  function remove(id) {
    return server.delete(`/${id}`);
  }

  return {
    getAll,
    create,
    read,
    remove
  };
})();

export default OrderService;
