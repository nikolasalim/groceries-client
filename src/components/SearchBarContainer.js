import React from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { getSearchedMarkets } from "../actions/marketsActions";

class SearchBarContainer extends React.Component {
  state = { search: "" };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log("state now is", this.state);
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.getSearchedMarkets(this.state.search);
    // create action for market's reducer
    ///// split reducer into two, so I can have both info? list & searched
    // that takes this states and sends in the req.body as a parameter
    // and send a get request to backend

    // so that on backend I can query with 'findAll where name: req.body'
    //
  };

  render() {
    return (
      <SearchBar
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        searchRequest={this.state.search}
      />
    );
  }
}

const mapDispatchToProps = { getSearchedMarkets };

export default connect(null, mapDispatchToProps)(SearchBarContainer);
