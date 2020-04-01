import React from "react";
import { Link } from "react-router-dom";

class MarketsSearchResultsList extends React.Component {
  render() {
    return this.props.markets.map(market => {
      return (
        <Link to={`/market/${market.id}`} key={market.id}>
          <div>{market.name}</div>
        </Link>
      );
    });
  }
}

export default MarketsSearchResultsList;
