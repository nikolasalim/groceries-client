export default function(state = [], action = {}) {
  switch (action.type) {
    case "GET_MARKET_PRODUCTS":
      return action.payload;
    case "REMOVE_PRODUCT":
      // console.log("action.payload is:", action.payload);

      const updatedState = state.filter(
        product => product.id !== parseInt(action.payload)
      );
      console.log("updatedState is:", updatedState);
      return updatedState;
    default:
      return state;
  }
}
