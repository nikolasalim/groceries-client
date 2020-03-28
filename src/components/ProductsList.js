import React from "react";
import AddProductFormContainer from "./AddProductFormContainer";

class ProductsList extends React.Component {
  render() {
    return (
      <div>
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
        <AddProductFormContainer marketId={this.props.marketId} />
      </div>
    );
  }
}

export default ProductsList;
