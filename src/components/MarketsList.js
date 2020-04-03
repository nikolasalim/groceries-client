import React from "react";
import { Link, Redirect } from "react-router-dom";
import SearchBarMarketsContainer from "./SearchBarMarketsContainer";

import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Grid
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

        <Grid item>
          {this.props.markets.map(market => {
            return (
              <List disablePadding={true} key={market.id}>
                <ListItem button component={Link} to={`/market/${market.id}`}>
                  <ListItemText primary={market.name} />
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

{
  /* <List component="nav" aria-label="secondary mailbox folder">
  <ListItem
    button
    selected={selectedIndex === 2}
    onClick={event => handleListItemClick(event, 2)}
  >
    <ListItemText primary="Trash" />
  </ListItem>
  <ListItem
    button
    selected={selectedIndex === 3}
    onClick={event => handleListItemClick(event, 3)}
  >
    <ListItemText primary="Spam" />
  </ListItem>
</List>; */
}
