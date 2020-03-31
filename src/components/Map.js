import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

class Map extends React.Component {
  render() {
    return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 10, lng: 10 }} />;
  }
}

export default Map;
