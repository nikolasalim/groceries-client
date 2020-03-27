export default function(state = { list: [], searched: [] }, action = {}) {
  switch (action.type) {
    case "GET_MARKET_PRODUCTS":
      return { ...state, list: action.payload };
    case "REMOVE_PRODUCT":
      const updatedState = state.filter(
        product => product.id !== parseInt(action.payload)
      );
      return updatedState;
    case "GET_SEARCHED_PRODUCTS":
      console.log("action.payload in GET_SEARCHED_PRODUCTS is", action.payload);
      return { ...state, searched: action.payload };
    default:
      return state;
  }
}
