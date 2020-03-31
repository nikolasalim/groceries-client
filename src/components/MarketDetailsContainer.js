import React from "react";
import { connect } from "react-redux";
import ProductsList from "./ProductsList";
import { removeProduct, getMarketProducts } from "../actions/productsActions";
import SearchBarProductsContainer from "./SearchBarProductsContainer";

class MarketDetailsContainer extends React.Component {
  componentDidMount() {
    const { marketId } = this.props.match.params;
    this.props.getMarketProducts(marketId);
  }

  stockHandler = productId => {
    const { marketId } = this.props.match.params;
    this.props.removeProduct(marketId, productId);
  };

  render() {
    const { marketId } = this.props.match.params;

    if (this.props.products.searched.length === 0) {
      return (
        <div>
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
        <SearchBarProductsContainer marketId={marketId} />
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
