import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddForm from "./AddForm";
import { fetchMarkets } from "../actions/marketsActions";

import { Typography, Grid } from "@material-ui/core";

class AddMarketContainer extends React.Component {
  state = {
    name: "",
    latitude: this.props.latitude,
    longitude: this.props.longitude,
    displayingAddForm: false,
    place: "",
    fetchRedirect: false,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.fetchMarkets(this.state.name);
    this.setState({ name: "", fetchRedirect: true });
  };

  renderRedirect = () => {
    if (this.state.fetchRedirect) {
      return <Redirect to={`/market/search`} />;
    }
  };

  render() {
    return (
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item>
          <AddForm
            placeholder={"Find market"}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </Grid>
        {this.renderRedirect()}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

const mapDispatchToProps = {
  fetchMarkets,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMarketContainer);
