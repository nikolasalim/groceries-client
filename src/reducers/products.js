export default function(state = { list: [], searched: [] }, action = {}) {
  switch (action.type) {
    case "GET_MARKET_PRODUCTS":
      return { ...state, list: action.payload };
    case "REMOVE_PRODUCT":
      const updatingListToRemove = state.list.filter(
        product => product.id !== parseInt(action.payload)
      );
      const updatingSearchedToRemove = state.searched.filter(
        product => product.id !== parseInt(action.payload)
      );
      const updatedStateToRemove = {
        list: updatingListToRemove,
        searched: updatingSearchedToRemove
      };
      return updatedStateToRemove;
    case "GET_SEARCHED_PRODUCTS":
      return { ...state, searched: action.payload };
    case "ADD_PRODUCT":
      return { ...state, list: [...state.list, action.payload], searched: [] };
    default:
      return state;
  }
}
