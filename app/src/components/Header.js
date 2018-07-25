import React from "react";
import { NavLink } from "react-router-dom";
import configApp from "./../config/app";

const Header = () => (
  <div className="section">
    <nav className="level">
      <div className="level-item">
        <div>
          <p className="heading">controle de pedidos</p>
          <p className="title">{configApp.name}</p>
        </div>
      </div>
      <p className="level-item has-text-centered">
        <NavLink to={`${configApp.base}`} className="link is-info">
          Listar pedidos
        </NavLink>
      </p>
      <p className="level-item has-text-centered">
        <NavLink to={`${configApp.base}create`} className="link is-info">
          Novo pedido
        </NavLink>
      </p>
      <p className="level-item has-text-centered">
        <NavLink to={`${configApp.base}products`} className="link is-info">
          Gerir produtos
        </NavLink>
      </p>
    </nav>
  </div>
);

export default Header;
