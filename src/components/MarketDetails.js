import React from "react";
import ProductsList from "./ProductsList";

import { Button, Typography, Card, Grid } from "@material-ui/core";

class MarketDetails extends React.Component {
  // stockHandler = productId => {
  //   // const { marketId } = this.props.match.params;
  //   const marketId = this.props.marketId;
  //   this.props.removeProduct(marketId, productId);
  // };

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
        <Grid item>
          <Typography variant="h6">{this.props.marketName}</Typography>
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
