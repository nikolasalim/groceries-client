import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Switch, Route } from "react-router-dom";
import MarketsListContainer from "./components/MarketsListContainer";
import NavBarContainer from "./components/NavBarContainer";
import MarketDetailsContainer from "./components/MarketDetailsContainer";
import AddMarketContainer from "./components/AddMarketContainer";
import MapContainer from "./components/MapContainer";
import Footer from "./components/Footer";
import MarketsSearchResultsContainer from "./components/MarketsSearchResultsContainer";

import { Grid } from "@material-ui/core/";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Grid
          container
          direction="row"
          justify="space-between"
          spacing={2}
          alignItems="stretch"
        >
          <Grid item xs={12} /* style={{ paddingBottom: "50px" }} */>
            <NavBarContainer />
          </Grid>

          <Grid item xs={12}>
            <Switch>
              <Route
                path="/market/results"
                component={MarketsSearchResultsContainer}
              />
              <Route
                path="/market/:marketId"
                component={MarketDetailsContainer}
              />
              <Route path="/market" component={AddMarketContainer} />
              <Route path="/map" component={MapContainer} />
              <Route path="/" component={MarketsListContainer} />
            </Switch>
          </Grid>

          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Provider>
    );
  }
}

export default App;
