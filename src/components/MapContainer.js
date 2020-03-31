import React from "react";
// import Map from "./Map";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const googleKey = "AIzaSyAPU3Byc-ML0f-09-kZZsbiAgMQEHtGg_4";

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
  console.log("my coordenates are:", coord);
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

navigator.geolocation.getCurrentPosition(success, error, options);

function Map() {
  console.log("coord obj is", coord);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: coord.lat, lng: coord.lng }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

class MapContainer extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleKey}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
  }
}

export default MapContainer;
