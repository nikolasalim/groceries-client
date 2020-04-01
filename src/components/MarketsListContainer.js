import React from "react";
import { connect } from "react-redux";
import { getAllMarkets } from "../actions/marketsActions";
import MarketsList from "./MarketsList";
import AddMarketContainer from "./AddMarketContainer";
import SearchBarMarketsContainer from "./SearchBarMarketsContainer";
import getDistanceInKm from "../extra/getDistanceInKm";
import { success, error, options, coord } from "../extra/getCurrentPosition";

class MarketsListContainer extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(success, error, options);
    this.props.getAllMarkets();
  }

  componentDidUpdate() {
    if (coord.lat === null || coord.lng === null) {
      this.props.getAllMarkets();
    }
  }

  // Sorting markets by nearest location:

  sortingMarkets = arr => {
    const sorted = arr.sort((a, b) => {
      a = getDistanceInKm(
        coord.latitude,
        coord.longitude,
        a.latitude,
        a.longitude
      );
      b = getDistanceInKm(
        coord.latitude,
        coord.longitude,
        b.latitude,
        b.longitude
      );

      return a - b;
    });
    return sorted;
  };

  render() {
    if (this.props.markets.list.length === 0) {
      return (
        <div>
          <p>No markets have been added yet.</p>
          <AddMarketContainer />
        </div>
      );
    }
    return (
      <div>
        Markets close to you:
        <SearchBarMarketsContainer />
        <MarketsList markets={this.sortingMarkets(this.props.markets.list)} />
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
