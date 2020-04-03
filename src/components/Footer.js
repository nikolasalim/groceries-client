import React from "react";

import { Grid, Typography, Paper } from "@material-ui/core/";

class Footer extends React.Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item>
          <Typography variant="caption" gutterBottom>
            Stay safe ♥︎
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
