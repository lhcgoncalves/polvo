import { server } from "./../config/axios";

const ProductService = (() => {
  function getAll() {
    return server.get("/products");
  }

  function create(products) {
    return server.post("/products", products);
  }

  function edit(id, products) {
    return server.put(`/products/${id}`, products);
  }

  function read(id) {
    return server.get(`/products/${id}`);
  }

  function remove(id) {
    return server.delete(`/products/${id}`);
  }

  return {
    getAll,
    create,
    edit,
    read,
    remove
  };
})();

export default ProductService;
