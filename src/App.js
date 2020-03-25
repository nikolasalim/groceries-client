import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import LandingPageContainer from "./components/LandingPageContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LandingPageContainer />
      </Provider>
    );
  }
}

export default App;
