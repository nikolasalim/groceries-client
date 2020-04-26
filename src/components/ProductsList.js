import React from "react";
import AddProductFormContainer from "./AddProductFormContainer";
import moment from "moment";

import { Button, Typography, Card, Grid } from "@material-ui/core";

class ProductsList extends React.Component {
  render() {
    if (this.props.products.length === 0) {
      return (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="subtitle2">
              No products marked as out-of-stock.
            </Typography>
          </Grid>
          <Grid item>
            <AddProductFormContainer marketId={this.props.marketId} />
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="subtitle2">Currently out-of-stock:</Typography>
        </Grid>

        {this.props.products.map((product) => {
          return (
            <Card
              variant="outlined"
              style={{ margin: "10px 0px" }}
              key={product.id}
            >
              <Grid
                item
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
                style={{ padding: 10 }}
              >
                <Grid item>
                  <Typography variant="subtitle1">{product.name}</Typography>
                </Grid>

                <Grid item>
                  {product.updatedAt ? (
                    <Typography variant="caption">
                      Last update:{" "}
                      {moment(product.updatedAt).startOf("minute").fromNow()}
                    </Typography>
                  ) : (
                    <Typography variant="caption">
                      Last update: just now
                    </Typography>
                  )}
                </Grid>

                <Grid item>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={() => this.props.stockHandler(product.id)}
                  >
                    <Typography variant="caption">
                      It's back in stock!
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Card>
          );
        })}
        <Grid item>
          <AddProductFormContainer marketId={this.props.marketId} />
        </Grid>
      </Grid>
    );
  }
}

export default ProductsList;
