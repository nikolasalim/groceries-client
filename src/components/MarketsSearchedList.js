import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SearchBarMarketsContainer from "./SearchBarMarketsContainer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { Typography, Grid } from "@material-ui/core";

class MarketsSearchedList extends React.Component {
  state = { addMarketsRedirect: false };

  renderAddMarketRedirect = () => {
    if (this.state.addMarketsRedirect) {
      console.log("state is:", this.state);
      return <Redirect to="/market" />;
    }
  };

  resetStore = () => {
    this.props.markets.searched = [];
    this.props.markets.fetched = [];
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
        style={{ padding: 10 }}
      >
        {this.renderAddMarketRedirect()}
        <Grid item>
          {this.props.marketsSearched.map(market => {
            return (
              <List key={market.id}>
                <ListItem button component={Link} to={`/market/${market.id}`}>
                  <ListItemText primary={market.name} />
                </ListItem>
                <Divider />
              </List>
            );
          })}
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            Not the market you're looking for?
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="subtitle2">Try again: </Typography>
          </Grid>
          <Grid item>
            <SearchBarMarketsContainer />
          </Grid>

          {/* <Grid item>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() =>
                this.setState({
                  addMarketsRedirect: true
                })
              }
            >
              Find it!
            </Button>
          </Grid> */}
        </Grid>
        {this.resetStore()}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

export default connect(mapStateToProps)(MarketsSearchedList);
