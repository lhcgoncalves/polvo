import React, { Component } from "react";

import Header from "./../components/Header";
import Hero from "./../components/Hero";
import ProductList from "./../components/ProductList";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loadingActions from "../store/actions/loading";
import { NavLink } from "react-router-dom";
import configApp from "./../config/app";

import ProductService from "../services/ProductService";
import Product from "../models/Product";

class Dashboard extends Component {
  state = {
    products: []
  };

  componentDidMount = () => {
    this.props.toggleLoading(true);

    ProductService.getAll().then(res => {
      this.setState({ products: res.data.map(reg => new Product(reg)) });

      this.props.toggleLoading(false);
    });
  };

  handleDeleteMessage(id) {
    ProductService.remove(id).then(res => {
      let products = this.state.products;
      products = products.filter(item => item.id !== id);

      this.setState({ products });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Hero title="Produtos" />
        {this.state.products.length === 0 ? (
          <div className="notification has-text-centered">
            Você ainda não cadastrou um produto.
          </div>
        ) : (
          <div className="section">
            <NavLink
              to={`${configApp.base}products/create`}
              className="button is-primary is-pulled-right"
            >
              Cadastrar novo produto
            </NavLink>
            <hr />
            <ProductList
              list={this.state.products}
              buttons="true"
              onRemove={this.handleDeleteMessage.bind(this)}
            />
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
