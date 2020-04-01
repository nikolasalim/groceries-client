import React from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getSearchedMarkets } from "../actions/marketsActions";

class SearchBarMarketsContainer extends React.Component {
  state = { search: "", searchMarketsRedirect: false };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.getSearchedMarkets(this.state.search);
    this.setState({ search: "", searchMarketsRedirect: true });
  };

  renderSearchMarketsRedirect = () => {
    if (this.state.searchMarketsRedirect) {
      return <Redirect to="/market/results" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderSearchMarketsRedirect()}
        <SearchBar
          placeholder="Search markets:"
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          searchRequest={this.state.search}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { getSearchedMarkets };

export default connect(null, mapDispatchToProps)(SearchBarMarketsContainer);
