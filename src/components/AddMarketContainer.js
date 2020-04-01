import React from "react";
import { connect } from "react-redux";
import AddForm from "./AddForm";
import AddMarketlist from "./AddMarketList";
import { fetchMarkets } from "../actions/marketsActions";

class AddMarketContainer extends React.Component {
  state = {
    name: "",
    latitude: this.props.latitude,
    longitude: this.props.longitude,
    displayingAddForm: false,
    place: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.fetchMarkets(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        Find and add a new market:
        <AddForm
          placeholder={"Find market"}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        <AddMarketlist marketsFetched={this.props.markets.fetched} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

const mapDispatchToProps = {
  fetchMarkets
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMarketContainer);
