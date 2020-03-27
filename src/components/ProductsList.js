import React from "react";

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
        <button onClick={this.props.addProductHandler}>Add Product</button>
      </div>
    );
  }
}

export default ProductsList;
