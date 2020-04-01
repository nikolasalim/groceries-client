import React from "react";
import AddProductFormContainer from "./AddProductFormContainer";
import moment from "moment";

class ProductsList extends React.Component {
  render() {
    if (this.props.products.length === 0) {
      return (
        <div>
          <p>No products marked as out-of-stock.</p>
          <AddProductFormContainer marketId={this.props.marketId} />
        </div>
      );
    }
    return (
      <div>
        {this.props.products.map(product => {
          return (
            <div key={product.id}>
              <div>{product.name}</div>

              {product.updatedAt ? (
                <span>
                  Last update:{" "}
                  {moment(product.updatedAt)
                    .startOf("minute")
                    .fromNow()}
                </span>
              ) : (
                <span>Last update: just now</span>
              )}

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
