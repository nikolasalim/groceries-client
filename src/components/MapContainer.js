import React from "react";
import { connect } from "react-redux";
import Map from "./Map";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import { getAllMarkets } from "../actions/marketsActions";

const googleKey = "AIzaSyAPU3Byc-ML0f-09-kZZsbiAgMQEHtGg_4";

const WrappedMap = withScriptjs(withGoogleMap(Map));

class MapContainer extends React.Component {
  componentDidMount() {
    this.props.getAllMarkets();
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleKey}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          markets={this.props.markets}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { getAllMarkets };

function mapStateToProps(state) {
  return { markets: state.markets, products: state.products };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
