import React from "react";
import { connect } from "react-redux";
import MarketsSearchedList from "./MarketsSearchedList";
import MarketsFetchedList from "./MarketsFetchedList";

class MarketsSearchResultsContainer extends React.Component {
  render() {
    if (this.props.markets.searched.length === 0) {
      return <MarketsFetchedList marketsFetched={this.props.markets.fetched} />;
    }

    return (
      <MarketsSearchedList marketsSearched={this.props.markets.searched} />
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

export default connect(mapStateToProps)(MarketsSearchResultsContainer);
