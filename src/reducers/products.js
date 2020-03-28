export default function(state = { list: [], searched: [] }, action = {}) {
  switch (action.type) {
    case "GET_MARKET_PRODUCTS":
      return { ...state, list: action.payload };
    case "REMOVE_PRODUCT":
      const updatedList = state.list.filter(
        product => product.id !== parseInt(action.payload)
      );
      const updatedSearched = state.searched.filter(
        product => product.id !== parseInt(action.payload)
      );
      const updatedState = { list: updatedList, searched: updatedSearched };
      return updatedState;
    // it is replacing the whole state with the result of filter, when it should replace only list;
    case "GET_SEARCHED_PRODUCTS":
      console.log("action.payload in GET_SEARCHED_PRODUCTS is", action.payload);
      return { ...state, searched: action.payload };
    case "ADD_PRODUCT":
      console.log("action.payload is:", action.payload);
      return { ...state, list: [...state.list, action.payload] };
    default:
      return state;
  }
}
