import React from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { getSearchedProducts } from "../actions/productsActions";

class SearchBarProductsContainer extends React.Component {
  state = { search: "" };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.getSearchedProducts(this.props.marketId, this.state.search);
  };

  render() {
    return (
      <SearchBar
        placeholder="Search products"
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        searchRequest={this.state.search}
      />
    );
  }
}

const mapDispatchToProps = {
  getSearchedProducts
};

export default connect(null, mapDispatchToProps)(SearchBarProductsContainer);
