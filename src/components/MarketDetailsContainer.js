import React from "react";
import { connect } from "react-redux";
import MarketDetails from "./MarketDetails";

class MarketDetailsContainer extends React.Component {
  render() {
    const { marketId } = this.props.match.params;
    const marketInfo = this.props.markets.list.find(
      market => market.id === parseInt(marketId)
    );

    return <MarketDetails marketId={marketId} marketInfo={marketInfo} />;
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

export default connect(mapStateToProps)(MarketDetailsContainer);
