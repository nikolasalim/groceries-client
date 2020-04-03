import React from "react";
import AddProductFormContainer from "./AddProductFormContainer";
import moment from "moment";

import { Button, Typography, Card, Grid } from "@material-ui/core";

class ProductsList extends React.Component {
  render() {
    if (this.props.products.length === 0) {
      return (
        <div>
          <Typography variant="subtitle2">
            No products marked as out-of-stock.
          </Typography>
          <AddProductFormContainer marketId={this.props.marketId} />
        </div>
      );
    }
    return (
      <div>
        {this.props.products.map(product => {
          return (
            <Grid
              justify="center"
              style={{ padding: 10, margin: "10px 0px" }}
              key={product.id}
            >
              <Card variant="outlined ">
                <Typography variant="subtitle1">{product.name}</Typography>

                {product.updatedAt ? (
                  <Typography variant="subtitle2">
                    Last update:{" "}
                    {moment(product.updatedAt)
                      .startOf("minute")
                      .fromNow()}
                  </Typography>
                ) : (
                  <Typography variant="subtitle2">
                    Last update: just now
                  </Typography>
                )}

                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  onClick={() => this.props.stockHandler(product.id)}
                >
                  <Typography variant="subtitle2">
                    It's back in stock!
                  </Typography>
                </Button>
              </Card>
            </Grid>
          );
        })}
        <AddProductFormContainer marketId={this.props.marketId} />
      </div>
    );
  }
}

export default ProductsList;
