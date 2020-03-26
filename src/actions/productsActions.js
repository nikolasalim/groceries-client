import request from "superagent";
const baseUrl = "http://localhost:4000";

// Reading all markets:

export const GET_MARKET_PRODUCTS = "GET_MARKET_PRODUCTS";
function gettingMarketProducts(payload) {
  return {
    type: GET_MARKET_PRODUCTS,
    payload
  };
}

export const getMarketProducts = marketId => (dispatch, getState) => {
  request(`${baseUrl}/${marketId}/product`)
    .then(response => {
      const action = gettingMarketProducts(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
