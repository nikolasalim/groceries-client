import React from "react";
import { Link } from "react-router-dom";

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
      <AppBar
        position="static"
        /* "fixed" */ color="primary"
        onClick={this.handleClick}
      >
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="secondary"
          scrollButtons="auto"
          centered
        >
          <Tab
            style={{ padding: "0px 40px" }}
            icon={<FormatListBulletedIcon />}
            component={Link}
            to="/"
          />
          <Tab
            style={{ padding: "0px 40px" }}
            icon={<RoomIcon />}
            component={Link}
            to="/map"
          />
        </Tabs>
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}
export default connect(mapStateToProps)(NavBar);
