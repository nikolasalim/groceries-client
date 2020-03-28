import React from "react";
import { connect } from "react-redux";
import { getAllMarkets } from "../actions/marketsActions";
import MarketsList from "./MarketsList";
import SearchBarMarketsContainer from "./SearchBarMarketsContainer";

class MarketsListContainer extends React.Component {
  componentDidMount() {
    this.props.getAllMarkets();
  }

  render() {
    if (this.props.markets.searched.length === 0) {
      return (
        <div>
          <SearchBarMarketsContainer />
          <MarketsList markets={this.props.markets.list} />
        </div>
      );
    }
    return (
      <div>
        <SearchBarMarketsContainer />
        <MarketsList markets={this.props.markets.searched} />
      </div>
    );
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
