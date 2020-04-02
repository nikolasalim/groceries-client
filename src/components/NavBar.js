import React from "react";
import { Link } from "react-router-dom";
// import Link from "@material-ui/core/Link";

import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import RoomIcon from "@material-ui/icons/Room";

class NavBar extends React.Component {
  handleClick = () => {
    this.props.markets.searched = [];
    this.props.markets.fetched = [];
  };

  render() {
    return (
      <AppBar position=/* "static" */ "fixed" color="default">
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="auto"
        
          centered
        >
          <Tab style={{padding: "0px 40px"}} icon={<FormatListBulletedIcon />} component={Link} to="/" />
          <Tab style={{padding: "0px 40px"}} icon={<RoomIcon />} component={Link} to="/map" />
        </Tabs>
      </AppBar>

      // <div>
      //   <span>
      //     <Link to="/" onClick={this.handleClick}>
      //       LOGO
      //     </Link>
      //   </span>
      //   <span>
      //     <Link to="/map">MAP</Link>
      //   </span>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}
export default connect(mapStateToProps)(NavBar);
