import React from "react";
import { connect } from "react-redux";
import ProductsList from "./ProductsList";
import { removeProduct, getMarketProducts } from "../actions/productsActions";
import SearchBarProductsContainer from "./SearchBarProductsContainer";
import MarketDetails from "./MarketDetails";

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
    const marketName = this.getName(this.props.markets.list);
    const { marketId } = this.props.match.params;

    return (
      <div>
        <MarketDetails
          marketName={marketName}
          marketId={marketId}
          products={this.props.products.list}
          stockHandler={this.stockHandler}
        />
        {/* <ProductsList
          products={this.props.products.list}
          stockHandler={this.stockHandler}
          marketId={marketId}
        /> */}
      </div>
    );

    // // No products to show:
    // if (this.props.products.list.length === 0) {
    //   return (
    //     <div>
    //       <MarketDetails marketName={marketName} />
    //       <ProductsList
    //         products={this.props.products.list}
    //         stockHandler={this.stockHandler}
    //         marketId={marketId}
    //       />
    //     </div>
    //   );
    // }

    // // No products were searched:
    // if (this.props.products.searched.length === 0) {
    //   return (
    //     <div>
    //       <MarketDetails marketName={marketName} />

    //       <ProductsList
    //         products={this.props.products.list}
    //         stockHandler={this.stockHandler}
    //         marketId={marketId}
    //       />
    //     </div>
    //   );
    // }

    // return (
    //   <div>
    //     <MarketDetails marketName={marketName} />

    //     <ProductsList
    //       products={this.props.products.searched}
    //       stockHandler={this.stockHandler}
    //       marketId={marketId}
    //     />
    //   </div>
    // );
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
