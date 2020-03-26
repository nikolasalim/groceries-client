import React from "react";

class MarketDetails extends React.Component {
  render() {
    const { name } = this.props.marketInfo;

    return (
      <div>
        <h3>{name}</h3>
        {this.props.products.map(product => {
          return (
            <div key={product.id}>
              <div>{product.name}</div>
              <button onClick={() => this.props.stockHandler(product.id)}>
                Back in Stock
              </button>
            </div>
          );
        })}
        <button onClick={this.props.addProductHandler}>Add Product</button>
      </div>
    );
  }
}

export default MarketDetails;
