import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import configApp from "./../config/app";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Nome</th>
              <th>SKU</th>
              <th>Valor</th>
              {this.props.buttons !== "false" && <th />}
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((product, i) => (
              <tr key={i}>
                <td>#{product.id}</td>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>R$ {product.price}</td>
                {this.props.buttons !== "false" && (
                  <td>
                    <NavLink
                      to={`${configApp.base}products/edit/${product.id}`}
                      className="button is-primary"
                    >
                      Editar
                    </NavLink>{" "}
                    <button
                      className="button is-danger"
                      onClick={e => this.props.onRemove(product.id)}
                    >
                      Remover
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
