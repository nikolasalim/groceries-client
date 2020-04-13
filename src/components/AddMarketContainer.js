import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddForm from "./AddForm";
import MarketsFetchedList from "./MarketsFetchedList";
import { fetchMarkets } from "../actions/marketsActions";

class AddMarketContainer extends React.Component {
  state = {
    name: "",
    latitude: this.props.latitude,
    longitude: this.props.longitude,
    displayingAddForm: false,
    place: "",
    fetchRedirect: false,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.fetchMarkets(this.state.name);
    this.setState({ name: "", fetchRedirect: true });
  };

  renderRedirect = () => {
    if (this.state.fetchRedirect) {
      return <Redirect to={`/market/search`} />;
    }
  };

  // this should be only the form and redirect to markets fetchedList on onSubmit

  render() {
    return (
      <div>
        {this.renderRedirect()}
        Find and add a new market:
        <AddForm
          placeholder={"Find market"}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        {/* {this.props.markets.fetched.length > 0 ? (
          <MarketsFetchedList marketsFetched={this.props.markets.fetched} />
        ) : null} */}
        {/* <MarketsFetchedList marketsFetched={this.props.markets.fetched} /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

const mapDispatchToProps = {
  fetchMarkets,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMarketContainer);
