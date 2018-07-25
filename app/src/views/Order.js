import React, { Component } from "react";

import Header from "./../components/Header";
import Hero from "./../components/Hero";
import ProductList from "./../components/ProductList";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loadingActions from "../store/actions/loading";

import OrderService from "../services/OrderService";
import Order from "../models/Order";
import DateUtils from "./../models/DateUtils";

class Dashboard extends Component {
  state = {
    order: {
      products: []
    }
  };

  componentDidMount = () => {
    this.props.toggleLoading(true);

    OrderService.read(this.props.match.params.id).then(res => {
      this.setState({ order: new Order(res.data[0]) });

      this.props.toggleLoading(false);
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Hero title="Detalhes do pedido" />
        <hr />
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>
                <b>Data do pedido:</b>
                <br /> {DateUtils.dateFormat(this.state.order.date)}
              </p>
            </div>
            <div className="column">
              <p>
                <b>Total do pedido:</b>
                <br /> R$ {this.state.order.total}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <ProductList list={this.state.order.products} buttons="false" />
          <small>
            <em>
              * O valor dos produtos acima pode não refletir o valor do produto
              no ato do pedido.
            </em>
          </small>
        </div>
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
