import React, { Component } from "react";
import { connect } from "react-redux";

class Loading extends Component {
  render() {
    return (
      <div>
        {this.props.loadingStatus && (
          <progress
            className="progress is-danger is-small"
            value="95"
            max="100"
          >
            90%
          </progress>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({ loadingStatus: state.loading });
export default connect(mapStateToProps)(Loading);
