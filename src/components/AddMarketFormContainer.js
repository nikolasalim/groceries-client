import React from "react";
import AddForm from "./AddForm";
import { connect } from "react-redux";
// import { addProduct } from "../actions/productsActions";

class AddMarketFormContainer extends React.Component {
  state = { name: "", latitude: null, longitude: null };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    // this.props.addProduct(this.state, parseInt(this.props.marketId));
    this.setState({ name: "" });
  };

  render() {
    return (
      <AddForm
        placeholder={"Add product"}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

const mapDispatchToProps = {
  /* addProduct */
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMarketFormContainer);
