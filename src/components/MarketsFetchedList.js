import React from "react";
import { connect } from "react-redux";
import { createMarket } from "../actions/marketsActions";
import { Redirect } from "react-router-dom";
import SearchBarMarketsContainer from "./SearchBarMarketsContainer";

import { Button, Typography, Grid, Card } from "@material-ui/core";

class MarketsFetchedList extends React.Component {
  state = {
    newMarketRedirect: false
  };

  addHandler = marketInfo => {
    this.props.createMarket(marketInfo);
    this.setState({ newMarketRedirect: true });
  };

  renderRedirect = () => {
    if (this.props.redirectId) {
      return <Redirect to={`/market/${this.props.redirectId}`} />;
    }
  };

  render() {
    if (this.props.marketsFetched.length === 0) {
      return (
        <Grid container justify="center" alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="subtitle2">No markets found.</Typography>
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
        alignContent="center"
        spacing={1}
        style={{ padding: 10 }}
      >
        <Grid item>
          <SearchBarMarketsContainer />
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            Is this the market you're looking for?
          </Typography>
        </Grid>
        <Grid item>
          {this.props.marketsFetched.map(market => {
            return (
              <Card
                variant="outlined"
                style={{ margin: "15px 30px" }}
                key={market.id}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  alignContent="center"
                  spacing={1}
                  style={{ padding: 10 }}
                >
                  <Grid item>
                    <Typography variant="h6">{market.name}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">
                      {market.formatted_address}
                    </Typography>
                  </Grid>

                  <Grid item>
                    {this.renderRedirect()}
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      onClick={() => {
                        this.addHandler(market);
                        this.renderRedirect();
                      }}
                    >
                      Add!
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets, redirectId: state.redirect };
}

const mapDispatchToProps = { createMarket };

export default connect(mapStateToProps, mapDispatchToProps)(MarketsFetchedList);
