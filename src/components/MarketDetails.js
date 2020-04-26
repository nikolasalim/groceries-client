import React from "react";
import ProductsList from "./ProductsList";

import { Typography, Grid } from "@material-ui/core";

class MarketDetails extends React.Component {
  render() {
    const marketId = this.props.marketId;

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item style={{ padding: "40px 0px 0px 0px" }}>
          <Typography variant="h6" color="primary">
            {this.props.marketName}
          </Typography>
        </Grid>
        <Grid item>
          <ProductsList
            products={this.props.products}
            stockHandler={this.props.stockHandler}
            marketId={marketId}
          />
        </Grid>
      </Grid>
    );
  }
}

export default MarketDetails;
