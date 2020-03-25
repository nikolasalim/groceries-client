import request from "superagent";
const baseUrl = "http://localhost:4000";

export const GET_ALL_MARKETS = "GET_ALL_MARKETS";
function gettingAllMarkets(payload) {
  return {
    type: GET_ALL_MARKETS,
    payload
  };
}

export const getAllMarkets = () => (dispatch, getState) => {
  request(`${baseUrl}/market`)
    .then(response => {
      const action = gettingAllMarkets(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
