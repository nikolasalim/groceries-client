import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends React.Component {
  handleClick = () => {
    this.props.markets.searched = [];
    this.props.markets.fetched = [];
  };

  render() {
    return (
      <div>
        <span>
          <Link to="/" onClick={this.handleClick}>
            LOGO
          </Link>
        </span>
        <span>
          <Link to="/map">MAP</Link>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}
export default connect(mapStateToProps)(NavBar);
