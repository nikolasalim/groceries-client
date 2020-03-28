import React from "react";
import AddProductForm from "./AddProductForm";
import { connect } from "react-redux";
import { addProduct, updateProductStock } from "../actions/productsActions";

class AddProductFormContainer extends React.Component {
  state = { name: "" };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    console.log("on Submit is running");
    event.preventDefault();
    this.props.addProduct(this.state);
    this.props.updateProductStock(this.props.marketId /* productId */);
    this.setState({ name: "" });

    // chain thens in the addProduct, so I won't need the updateProduct
    // will prob have to pass in marketId and productId as arguments or somemething
    // question: if I'm creating the product right now, can I already have its Id for the next request?
    //https://stackoverflow.com/questions/21089842/how-to-chain-http-calls-with-superagent-supertest/45198533

    // another possibility: figure out if this can work:
    // https://sequelize.org/master/class/lib/associations/belongs-to-many.js~BelongsToMany.html#instance-method-create
  };

  render() {
    return (
      <AddProductForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

const mapDispatchToProps = { addProduct, updateProductStock };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductFormContainer);
