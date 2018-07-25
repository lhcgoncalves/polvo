import configApp from "./app";

import Dashboard from "./../views/Dashboard";
import Order from "./../views/Order";
import Product from "./../views/Product";
import CreateOrder from "../views/CreateOrder";
import CreateProduct from "../views/CreateProduct";

export const routes = [
  {
    path: configApp.base,
    exact: true,
    main: Dashboard
  },
  {
    path: configApp.base + "create",
    exact: true,
    main: CreateOrder
  },
  {
    path: configApp.base + "orders/:id",
    exact: true,
    main: Order
  },
  {
    path: configApp.base + "products/create",
    exact: true,
    main: CreateProduct
  },
  {
    path: configApp.base + "products/edit/:id",
    exact: true,
    main: CreateProduct
  },
  {
    path: configApp.base + "products",
    exact: true,
    main: Product
  }
];
