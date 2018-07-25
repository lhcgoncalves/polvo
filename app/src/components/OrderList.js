import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import configApp from "./../config/app";

import DateUtils from "./../models/DateUtils";

export default class OrderList extends Component {
  render() {
    return (
      <div className="container">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Núm. do pedido</th>
              <th>Data do pedido</th>
              <th>Total do pedido</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((order, i) => (
              <tr key={i}>
                <td>#{order.id}</td>
                <td>{DateUtils.dateFormat(order.date)}</td>
                <td>{order.total}</td>
                <td>
                  <NavLink
                    to={`${configApp.base}orders/${order.id}`}
                    className="button is-primary"
                  >
                    Consultar produtos
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
