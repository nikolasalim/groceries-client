import React from "react";
import { Link } from "react-router-dom";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
function success(pos) {
  const crd = pos.coords;
  // console.log("Your current position is:");
  // console.log(`Latitude : ${crd.latitude}`);
  // console.log(`Longitude: ${crd.longitude}`);
  // console.log(`More or less ${crd.accuracy} meters.`);
  const myCoordenates = { lat: crd.latitude, lng: crd.longitude };
  return myCoordenates;
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
const result = navigator.geolocation.getCurrentPosition(
  success,
  error,
  options
);

// Getting distance between two coordenates:

function getDistanceInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
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
  render() {
    // const marketsDistanceFromMe = this.props.markets.map(market => {
    //   return getDistanceInKm(
    //     52.373107499999996,
    //     4.856551,
    //     market.latitude,
    //     market.longitude
    //   );
    // });

    const sorted = this.props.markets.sort((a, b) => {
      a = getDistanceInKm(
        52.373107499999996,
        4.856551,
        a.latitude,
        a.longitude
      );
      b = getDistanceInKm(
        52.373107499999996,
        4.856551,
        b.latitude,
        b.longitude
      );
      return a - b;
    });

    console.log("sorted is:", sorted);

    return this.props.markets.map(market => {
      return (
        <Link to={`/market/${market.id}`} key={market.id}>
          <div>{market.name}</div>
        </Link>
      );
    });
  }
}

export default MarketsList;
