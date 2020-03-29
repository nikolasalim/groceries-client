import React from "react";
import { Link } from "react-router-dom";

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
  return coord;
}

function error(err) {
  console.log("error is running");
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// navigator.geolocation.getCurrentPosition(success, error, options);

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

class MarketsList extends React.Component {
  state = { gotLocation: false };

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(success, error, options);
    setTimeout(() => this.setState({ gotLocation: true }), 3000);
  }

  render() {
    const marketsSorted = this.props.markets.sort((a, b) => {
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

    if (!this.state.gotLocation) {
      return <h1>Loading...</h1>;
    }
    return marketsSorted.map(market => {
      return (
        <Link to={`/market/${market.id}`} key={market.id}>
          <div>{market.name}</div>
        </Link>
      );
    });
  }
}

export default MarketsList;

// const marketsSorted = this.props.markets.sort((a, b) => {
//   a = getDistanceInKm(
//     52.373107499999996,
//     4.856551,
//     a.latitude,
//     a.longitude
//   );
//   b = getDistanceInKm(
//     52.373107499999996,
//     4.856551,
//     b.latitude,
//     b.longitude
//   );
//   return a - b;
// });
