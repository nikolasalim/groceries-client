import React from "react";
import { connect } from "react-redux";
import MarketDetails from "./MarketDetails";
import { getMarketProducts } from "../actions/productsActions";

class MarketDetailsContainer extends React.Component {
  /*  componentDidMount() {
    const { marketId } = this.props.match.params;
    this.props.getMarketProducts(marketId);
  } */

  render() {
    const { marketId } = this.props.match.params;
    const marketInfo = this.props.markets.list.find(
      market => market.id === parseInt(marketId)
    );

    return (
      <MarketDetails
        marketInfo={marketInfo} /* products={this.props.products} */
      />
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets /* , products: state.products */ };
}

const mapDispatchToProps = { getMarketProducts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketDetailsContainer);
