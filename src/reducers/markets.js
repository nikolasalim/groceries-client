export default function(state = { list: [], searched: [] }, action = {}) {
  switch (action.type) {
    case "GET_ALL_MARKETS":
      return { ...state, list: action.payload };
    case "GET_SEARCHED_MARKETS":
      return { ...state, searched: action.payload };
    default:
      return state;
  }
}
