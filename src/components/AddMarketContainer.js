import React from "react";
import { connect } from "react-redux";
import AddForm from "./AddForm";
import AddMarketlist from "./AddMarketList";
import { fetchMarkets } from "../actions/marketsActions";

class AddMarketContainer extends React.Component {
  state = {
    name: "",
    latitude: this.props.latitude,
    longitude: this.props.longitude,
    displayingAddForm: false,
    place: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.fetchMarkets(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        Add a new market:
        <AddForm
          placeholder={"Add market"}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        <AddMarketlist marketsFetched={this.props.markets.fetched} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

const mapDispatchToProps = {
  fetchMarkets
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMarketContainer);

// if (!this.state.displayingAddForm) {
//   return (
//     <button
//       onClick={() =>
//         this.setState({
//           ...this.state,
//           displayingAddForm: !this.state.displayingAddForm
//         })
//       }
//     >
//       Add a new market
//     </button>
//   );
// } else {
//   return (
//     <div>
//       <div>
//         <p>Are you in a market right now? Add it: </p>
//         <AddForm
//           placeholder={"Market name:"}
//           onSubmit={this.onSubmit}
//           onChange={this.onChange}
//           values={this.state}
//         />
//       </div>
//       <div>Are you not in a market? </div>
//     </div>
//   );
// }

// return (
//   <AddForm
//     placeholder={"Add market"}
//     onSubmit={this.onSubmit}
//     onChange={this.onChange}
//     values={this.state}
//   />
// );
