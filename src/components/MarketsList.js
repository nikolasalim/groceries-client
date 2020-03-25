import React from "react";
import { connect } from "react-redux";

class MarketsList extends React.Component {
  render() {
    return this.props.markets.map(market => {
      return <div key={market.id}>{market.name}</div>;
    });
  }
}

export default MarketsList;
