export default function(state = null, action = {}) {
  switch (action.type) {
    case "REDIRECT":
      return action.payload;
    case "RESET_REDIRECT":
      return action.payload;
    default:
      return state;
  }
}
