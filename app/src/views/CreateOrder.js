import React, { Component } from "react";

import Header from "./../components/Header";
import Hero from "./../components/Hero";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loadingActions from "../store/actions/loading";
import ProductService from "../services/ProductService";
import OrderService from "../services/OrderService";
import Product from "../models/Product";

class Dashboard extends Component {
  state = {
    created: false,
    products: [],
    options: [],
    total: 0
  };

  onChange(e) {
    const options = this.state.options;
    let total = this.state.total;
    let index;

    if (e.target.checked) {
      options.push(+e.target.value);
      total = total + parseFloat(e.target.attributes["data-price"].value);
    } else {
      index = options.indexOf(+e.target.value);
      options.splice(index, 1);
      total = total - parseFloat(e.target.attributes["data-price"].value);
      if (options.length === 0) {
        total = 0;
      }
    }
    this.setState({ options, total: parseFloat(total) });
  }

  componentDidMount = () => {
    this.props.toggleLoading(true);

    ProductService.getAll().then(res => {
      this.setState({ products: res.data.map(reg => new Product(reg)) });

      this.props.toggleLoading(false);
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.toggleLoading(true);

    let now = new Date().toISOString().split("T")[0];

    let obj = {
      date: now,
      total: this.state.total.toFixed(2),
      products: this.state.options
    };

    OrderService.create(obj).then(res => {
      this.setState({ created: true });
      this.props.toggleLoading(false);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Hero title="Cadastrar novo pedido" />

        {this.state.created && (
          <div className="notification is-success has-text-centered">
            Pedido cadastrado com sucesso
          </div>
        )}

        {this.state.products.length === 0 ? (
          <div className="notification has-text-centered">
            Você ainda não cadastrou nenhum produto.
          </div>
        ) : (
          <div className="section">
            <div className="container">
              Selecione os produtos:
              <form onSubmit={e => this.handleSubmit(e)}>
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th />
                      <th>Nome</th>
                      <th>SKU</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.products.map((product, i) => (
                      <tr key={i}>
                        <td>
                          <input
                            type="checkbox"
                            onChange={this.onChange.bind(this)}
                            value={product.id}
                            data-price={product.price}
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.sku}</td>
                        <td>R$ {product.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <small>
                  <em>
                    {this.state.options.length} produto(s) selecionado(s),
                    totalizando {this.state.total.toFixed(2)}
                  </em>
                </small>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link" type="submit">
                      Cadastrar
                    </button>
                  </div>
                  <div className="control">
                    <button
                      className="button is-text"
                      onClick={e => this.props.history.goBack()}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </form>
            </div>
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
