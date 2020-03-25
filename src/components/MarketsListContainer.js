import React from "react";
import { connect } from "react-redux";
import { getAllMarkets } from "../actions/marketsActions";
import MarketsList from "./MarketsList";

class MarketsListContainer extends React.Component {
  componentDidMount() {
    this.props.getAllMarkets();
  }

  render() {
    return <MarketsList markets={this.props.markets} />;
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

const mapDispatchToProps = { getAllMarkets };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketsListContainer);
