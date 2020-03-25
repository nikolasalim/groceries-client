import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Switch, Route } from "react-router-dom";
import MarketsListContainer from "./components/MarketsListContainer";
import NavBarContainer from "./components/NavBarContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavBarContainer />
        <Switch>
          <Route path="/" component={MarketsListContainer} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
