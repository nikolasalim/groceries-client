import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAllMarkets } from "../actions/marketsActions";
import SearchBarMarketsContainer from "./SearchBarMarketsContainer";
import MarketsSearchResultsList from "./MarketsSearchResultsList";

class MarketsSearchResultsContainer extends React.Component {
  state = { addMarketsRedirect: false };

  renderAddMarketRedirect = () => {
    if (this.state.addMarketsRedirect) {
      console.log("state is:", this.state);
      return <Redirect to="/market" />;
    }
  };

  //   componentDidMount() {
  //     this.props.getAllMarkets();
  //   }

  render() {
    if (this.props.markets.searched.length === 0) {
      return (
        <div>
          {this.renderAddMarketRedirect()}
          <SearchBarMarketsContainer />
          No markets were found. Please, try again or add one:
          <button
            onClick={() =>
              this.setState({
                addMarketsRedirect: true
              })
            }
          >
            Add new market
          </button>
        </div>
      );
    }

    return (
      <div>
        {this.renderAddMarketRedirect()}
        <SearchBarMarketsContainer />
        <MarketsSearchResultsList markets={this.props.markets.searched} />
        Not the market you're looking for?
        <button
          onClick={() =>
            this.setState({
              addMarketsRedirect: true
            })
          }
        >
          Add new market
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

export default connect(mapStateToProps)(MarketsSearchResultsContainer);

// class MarketsListContainer extends React.Component {
//   state = { addMarketsRedirect: false };

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(success, error, options);
//     this.props.getAllMarkets();
//   }

//   componentDidUpdate() {
//     if (coord.lat === null || coord.lng === null) {
//       this.props.getAllMarkets();
//     }
//   }

//   // Sorting markets by nearest location:

//   sortingMarkets = arr => {
//     const sorted = arr.sort((a, b) => {
//       a = getDistanceInKm(
//         coord.latitude,
//         coord.longitude,
//         a.latitude,
//         a.longitude
//       );
//       b = getDistanceInKm(
//         coord.latitude,
//         coord.longitude,
//         b.latitude,
//         b.longitude
//       );

//       return a - b;
//     });
//     return sorted;
//   };

//   renderRedirect = () => {
//     if (this.state.addMarketsRedirect) {
//       console.log("state is:", this.state);
//       return <Redirect to="/add-market" />;
//     }
//   };

//   render() {
//     if (this.props.markets.list.length === 0) {
//       return (
//         <div>
//           {this.renderRedirect()}
//           No markets have been added yet.
//           <button
//             onClick={() =>
//               this.setState({
//                 addMarketsRedirect: true
//               })
//             }
//           >
//             Add new market
//           </button>
//         </div>
//       );
//     }

//     if (this.props.markets.searched.length === 0) {
//       return (
//         <div>
//           {this.renderRedirect()}
//           <SearchBarMarketsContainer />
//           Markets close to you:
//           <MarketsList markets={this.sortingMarkets(this.props.markets.list)} />
//           <button
//             onClick={() =>
//               this.setState({
//                 addMarketsRedirect: true
//               })
//             }
//           >
//             Add new market
//           </button>
//         </div>
//       );
//     }
//     return (
//       <div>
//         {this.renderRedirect()}
//         Markets close to you:
//         <SearchBarMarketsContainer />
//         <MarketsList
//           markets={this.sortingMarkets(this.props.markets.searched)}
//         />
//         <button
//           onClick={() =>
//             this.setState({
//               addMarketsRedirect: true
//             })
//           }
//         >
//           Add new market
//         </button>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { markets: state.markets };
// }

// const mapDispatchToProps = { getAllMarkets };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MarketsListContainer);
