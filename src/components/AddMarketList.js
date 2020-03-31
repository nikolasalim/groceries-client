import React from "react";
import { connect } from "react-redux";
import { createMarket } from "../actions/marketsActions";
// import { Redirect } from "react-router-dom";

class AddMarketList extends React.Component {
  // state = {
  //   newMarketRedirect: false
  // };

  addHandler = marketInfo => {
    this.props.createMarket(marketInfo);
    // this.setState({ newMarketRedirect: true });
  };

  // renderRedirect = marketId => {
  //   if (this.state.newMarketRedirect) {
  //     console.log("this.props.markets is", this.props.markets);
  //     return <Redirect to={`/market/${marketId}`} />;
  //   }
  // };

  render() {
    console.log("this.props.marketsFetched is:", this.props.marketsFetched);
    if (this.props.marketsFetched.length === 0) {
      return <p>No markets found.</p>;
    }

    return (
      <div>
        {/* {this.renderRedirect()} */}
        {this.props.marketsFetched.map(market => {
          return (
            <div key={market.id}>
              <h4>{market.name}</h4>
              <p>{market.formatted_address}</p>
              <button
                onClick={() => {
                  this.addHandler(market);
                }}
              >
                Add
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

const mapDispatchToProps = { createMarket };

export default connect(mapStateToProps, mapDispatchToProps)(AddMarketList);
