export default function(state = [], action = {}) {
  switch (action.type) {
    case "GET_ALL_MARKETS":
      return action.payload;
    default:
      return state;
  }
}
