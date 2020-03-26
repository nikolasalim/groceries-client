import React from "react";

class MarketDetails extends React.Component {
  render() {
    const { name, oosProducts, id } = this.props.marketInfo;
    console.log("this.props.marketInfo is:", this.props.marketInfo);

    return (
      <div>
        <h3>{name}</h3>
        {oosProducts.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    );
  }
}

export default MarketDetails;
