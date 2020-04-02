import React from "react";
import { connect } from "react-redux";
import ProductsList from "./ProductsList";
import { removeProduct, getMarketProducts } from "../actions/productsActions";
import SearchBarProductsContainer from "./SearchBarProductsContainer";

import { Typography } from "@material-ui/core";

class MarketDetailsContainer extends React.Component {
  componentDidMount() {
    const { marketId } = this.props.match.params;
    this.props.getMarketProducts(marketId);
  }

  stockHandler = productId => {
    const { marketId } = this.props.match.params;
    this.props.removeProduct(marketId, productId);
  };

  getName = marketList => {
    const { marketId } = this.props.match.params;
    const currentMarket = marketList.find(
      market => market.id === Number(marketId)
    );
    return currentMarket.name;
  };

  render() {
    const { marketId } = this.props.match.params;

    if (this.props.products.list.length === 0) {
      return (
        <div>
          <Typography variant="h6">
            {this.getName(this.props.markets.list)}
          </Typography>
          <Typography variant="subtitle2">Currently out-of-stock:</Typography>
          <ProductsList
            products={this.props.products.list}
            stockHandler={this.stockHandler}
            marketId={marketId}
          />
        </div>
      );
    }

    if (this.props.products.searched.length === 0) {
      return (
        <div>
          <Typography variant="h6">
            {this.getName(this.props.markets.list)}
          </Typography>
          <Typography variant="subtitle2">Currently out-of-stock:</Typography>
          <SearchBarProductsContainer marketId={marketId} />
          <ProductsList
            products={this.props.products.list}
            stockHandler={this.stockHandler}
            marketId={marketId}
          />
        </div>
      );
    }
    return (
      <div>
        <h3>{this.getName(this.props.markets.list)}</h3>
        <SearchBarProductsContainer marketId={marketId} />
        Currently out-of-stock:
        <ProductsList
          products={this.props.products.searched}
          stockHandler={this.stockHandler}
          marketId={marketId}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets, products: state.products };
}

const mapDispatchToProps = { removeProduct, getMarketProducts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketDetailsContainer);
