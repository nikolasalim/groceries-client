import request from "superagent";
const baseUrl = "http://localhost:4000";

// Reading all products from a specific market:

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

// Removing a product from the Out of Stock list:

export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
function removingProduct(payload) {
  return {
    type: REMOVE_PRODUCT,
    payload
  };
}

export const removeProduct = (marketId, productId) => (dispatch, getState) => {
  console.log("removeProduct is running");

  request
    .delete(`${baseUrl}/${marketId}/product/${productId}`)
    .then(response => {
      const action = removingProduct(response.body);
      console.log("response body is", response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// export const deleteImage = (deletedImage, id) => (dispatch, getState) => {
//   request
//     .delete(`${baseUrl}/image/${id}`)
//     .send(deletedImage)
//     .then(response => {
//       const action = deletingImage(response.body);
//       console.log("response body in action is:", response.body);
//       dispatch(action);
//     })
//     .catch(console.error);
// };
