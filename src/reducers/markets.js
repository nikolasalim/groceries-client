export default function (
  state = { list: [], searched: [], fetched: [] },
  action = {}
) {
  switch (action.type) {
    case "GET_ALL_MARKETS":
      return action.payload.length === 0
        ? { ...state, list: "none" }
        : { ...state, list: action.payload };
    // return { ...state, list: action.payload };
    case "GET_SEARCHED_MARKETS":
      return { ...state, searched: action.payload };
    case "FETCH_MARKETS":
      return action.payload.length === 0
        ? { ...state, fetched: "none" }
        : { ...state, fetched: action.payload };
    // return { ...state, fetched: action.payload };
    case "CREATE_MARKET":
      return { ...state, list: [...state.list, action.payload], searched: [] };
    default:
      return state;
  }
}
