import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SearchBarMarketsContainer from "./SearchBarMarketsContainer";
import MarketsSearchedList from "./MarketsSearchedList";
import MarketsFetchedList from "./MarketsFetchedList";

import { Button, Typography, Card, Grid } from "@material-ui/core";

class MarketsSearchResultsContainer extends React.Component {
  // state = { addMarketsRedirect: false };

  // renderAddMarketRedirect = () => {
  //   if (this.state.addMarketsRedirect) {
  //     console.log("state is:", this.state);
  //     return <Redirect to="/market" />;
  //   }
  // };

  render() {
    if (this.props.markets.searched.length === 0) {
      return (
        <div>
          {/* {this.renderAddMarketRedirect()} */}
          {/* <SearchBarMarketsContainer /> */}
          <MarketsFetchedList marketsFetched={this.props.markets.fetched} />
        </div>
      );
    }

    return (
      <div>
        {/* {this.renderAddMarketRedirect()} */}
        {/* <SearchBarMarketsContainer /> */}
        <MarketsSearchedList marketsSearched={this.props.markets.searched} />
        {/* <Button
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
        </Button> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

export default connect(mapStateToProps)(MarketsSearchResultsContainer);
