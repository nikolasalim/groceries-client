import React from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

class MarketsSearchResultsList extends React.Component {
  render() {
    return this.props.markets.map(market => {
      return (
        <List key={market.id}>
          <ListItem button component={Link} to={`/market/${market.id}`}>
            <ListItemText primary={market.name} />
          </ListItem>
          <Divider />
        </List>
      );

      // return (
      //   <Link to={`/market/${market.id}`} key={market.id}>
      //     <div>{market.name}</div>
      //   </Link>
      // );
    });
  }
}

export default MarketsSearchResultsList;
