import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAllMarkets } from "../actions/marketsActions";
import MarketsList from "./MarketsList";
import SearchBarMarketsContainer from "./SearchBarMarketsContainer";

// Getting user's current position:

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

let coord = {
  lat: null,
  lng: null
};

function success(pos) {
  coord = {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude
  };
  // console.log("my coordenates are:", coord);
  return coord;
}

function error(err) {
  coord = {
    latitude: "blocked",
    longitude: "blocked"
  };
  console.log("error is running");
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Getting distance between two coordenates:

function getDistanceInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

class MarketsListContainer extends React.Component {
  state = { addMarketsRedirect: false };

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

  renderRedirect = () => {
    if (this.state.addMarketsRedirect) {
      console.log("state is:", this.state);
      return <Redirect to="/add-market" />;
    }
  };

  render() {
    if (this.props.markets.list.length === 0) {
      return (
        <div>
          {this.renderRedirect()}
          No markets have been added yet.
          <button
            onClick={() =>
              this.setState({
                addMarketsRedirect: true
              })
            }
          >
            Add new market
          </button>
        </div>
      );
    }

    if (this.props.markets.searched.length === 0) {
      return (
        <div>
          {this.renderRedirect()}
          <SearchBarMarketsContainer />
          Markets close to you:
          <MarketsList markets={this.sortingMarkets(this.props.markets.list)} />
          <button
            onClick={() =>
              this.setState({
                addMarketsRedirect: true
              })
            }
          >
            Add new market
          </button>
        </div>
      );
    }
    return (
      <div>
        {this.renderRedirect()}
        Markets close to you:
        <SearchBarMarketsContainer />
        <MarketsList
          markets={this.sortingMarkets(this.props.markets.searched)}
        />
        <button
          onClick={() =>
            this.setState({
              addMarketsRedirect: true
            })
          }
        >
          Add new market
        </button>
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
