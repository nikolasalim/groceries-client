import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MarketsListContainer from "./components/MarketsListContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MarketsListContainer />
      </Provider>
    );
  }
}

export default App;
