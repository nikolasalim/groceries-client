import React from "react";
import MarketsFetchedList from "./MarketsFetchedList";
import { connect } from "react-redux";

// import { Button, Typography, Grid, Card } from "@material-ui/core";

class MarketsFetchedListContainer extends React.Component {
  render() {
    return <MarketsFetchedList marketsFetched={this.props.markets.fetched} />;
  }
}

function mapStateToProps(state) {
  return { markets: state.markets, redirectId: state.redirect };
}

export default connect(mapStateToProps)(MarketsFetchedListContainer);
