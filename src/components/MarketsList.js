import React from "react";
import { Link } from "react-router-dom";
import SearchBarMarketsContainer from "./SearchBarMarketsContainer";

import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Grid,
} from "@material-ui/core";

class MarketsList extends React.Component {
  render() {
    return (
      <Grid
        style={{ marginTop: 5 }}
        container
        justify="center"
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <SearchBarMarketsContainer />
        </Grid>

        <Grid item>
          <Typography variant="subtitle2">Markets close to you:</Typography>
        </Grid>

        <Grid item color="primary">
          {this.props.markets.map((market) => {
            return (
              <List disablePadding={true} key={market.id}>
                <ListItem button component={Link} to={`/market/${market.id}`}>
                  <Typography variant="subtitle1" color="primary">
                    {market.name}
                  </Typography>
                </ListItem>
                <Divider />
              </List>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default MarketsList;
