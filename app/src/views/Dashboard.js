import React, { Component } from "react";

import Header from "./../components/Header";
import Hero from "./../components/Hero";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loadingActions from "../store/actions/loading";

import OrderService from "../services/OrderService";
import Order from "../models/Order";
import OrderList from "./../components/OrderList";

class Dashboard extends Component {
  state = {
    orders: []
  };

  componentDidMount = () => {
    this.props.toggleLoading(true);

    OrderService.getAll().then(res => {
      this.setState({ orders: res.data.map(reg => new Order(reg)) });

      this.props.toggleLoading(false);
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Hero title="Controle de pedidos" />

        {this.state.orders.length === 0 ? (
          <div className="notification has-text-centered">
            Você ainda não cadastrou um pedido.
          </div>
        ) : (
          <div className="section">
            <OrderList list={this.state.orders} />
          </div>
        )}
      </div>
    );
  }
}

// Redux State Binds
const mapDispatchToProps = dispatch => {
  return bindActionCreators(loadingActions, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
