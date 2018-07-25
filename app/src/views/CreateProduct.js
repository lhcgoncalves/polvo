import React, { Component } from "react";

import Header from "./../components/Header";
import Hero from "./../components/Hero";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loadingActions from "../store/actions/loading";
import ProductService from "../services/ProductService";

class CreateProduct extends Component {
  state = {
    id: 0,
    created: false,
    updated: false,
    name: "",
    price: "",
    sku: "",
    description: ""
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.toggleLoading(true);

    let obj = {
      name: this.state.name,
      price: this.state.price,
      sku: this.state.sku,
      description: this.state.description
    };

    if (this.state.id === 0) {
      ProductService.create(obj).then(res => {
        this.setState({ created: true });
        this.props.toggleLoading(false);
      });
    } else {
      ProductService.edit(this.state.id, obj).then(res => {
        this.setState({ updated: true });
        this.props.toggleLoading(false);
      });
    }
  }

  componentDidMount() {
    if (this.props.match.params.id !== undefined) {
      this.props.toggleLoading(true);
      this.setState({ id: this.props.match.params.id });

      ProductService.read(this.props.match.params.id).then(res => {
        this.setState({
          name: res.data.name,
          price: res.data.price,
          sku: res.data.sku,
          description: res.data.description
        });
        this.props.toggleLoading(false);
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Hero title="Gerenciar produto" />

        {this.state.created && (
          <div className="notification is-success has-text-centered">
            Produto cadastrado com sucesso
          </div>
        )}

        {this.state.updated && (
          <div className="notification is-info has-text-centered">
            Produto editado com sucesso
          </div>
        )}

        <div className="section">
          <div className="container">
            <form onSubmit={e => this.handleSubmit(e)}>
              <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">SKU</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={this.state.sku}
                    onChange={e => this.setState({ sku: e.target.value })}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Valor</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={this.state.price}
                    onChange={e => this.setState({ price: e.target.value })}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Descrição</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    value={this.state.description}
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                  />
                </div>
              </div>
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
)(CreateProduct);
