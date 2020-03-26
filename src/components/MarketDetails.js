import React from "react";

class MarketDetails extends React.Component {
  render() {
    const { name } = this.props.marketInfo;

    return (
      <div>
        This is the detail page for {name} with id {this.props.marketId}
      </div>
    );
  }
}

export default MarketDetails;
