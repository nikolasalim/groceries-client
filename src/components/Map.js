import React from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
const {
  MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

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
    lat: pos.coords.latitude,
    lng: pos.coords.longitude
  };
  return coord;
}

function error(err) {
  coord = {
    lat: "blocked",
    lng: "blocked"
  };
  console.log("error is running");
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

class Map extends React.Component {
  state = { selectedMarket: null };

  render() {
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: coord.lat, lng: coord.lng }}
        // defaultOptions={{styles: [object]}}
      >
        {this.props.markets.list.map(market => {
          return (
            <Marker
              key={market.id}
              position={{
                lat: Number(market.latitude),
                lng: Number(market.longitude)
              }}
              icon={{
                url: "./media/cart.png",
                scaledSize: new window.google.maps.Size(25, 25)
              }}
              onClick={() => {
                this.setState({ selectedMarket: market });
                console.log("state is", this.state);
              }}
            />
          );
        })}

        <Marker
          position={{ lat: coord.lat, lng: coord.lng }}
          icon={{
            url: "./media/person.png",
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        >
          <div>You are here</div>
        </Marker>

        {this.state.selectedMarket && (
          <InfoWindow
            position={{
              lat: Number(this.state.selectedMarket.latitude),
              lng: Number(this.state.selectedMarket.longitude)
            }}
            onCloseClick={() => this.setState({ selectedMarket: null })}
          >
            <div>
              <h4>{this.state.selectedMarket.name}</h4>
              {this.state.selectedMarket.oosProducts.length === 0 ? (
                <u>Currently no products marked as out-of-stock</u>
              ) : (
                <u>Out-of-stock:</u>
              )}

              {this.state.selectedMarket.oosProducts.map(product => (
                <p key={product.id}>{product.name}</p>
              ))}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
}

export default Map;
