import request from "superagent";
const baseUrl = "http://localhost:4000";
// const baseUrl = "https://arcane-meadow-16290.herokuapp.com";

// Reading all products from a specific market:

export const GET_MARKET_PRODUCTS = "GET_MARKET_PRODUCTS";
function gettingMarketProducts(payload) {
  return {
    type: GET_MARKET_PRODUCTS,
    payload,
  };
}

export const getMarketProducts = (marketId) => (dispatch, getState) => {
  request(`${baseUrl}/${marketId}/product`)
    .then((response) => {
      const action = gettingMarketProducts(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Reading products for searched markets

export const GET_SEARCHED_PRODUCTS = "GET_SEARCHED_PRODUCTS";
function gettingSearchedProducts(payload) {
  return {
    type: GET_SEARCHED_PRODUCTS,
    payload,
  };
}

export const getSearchedProducts = (marketId, keyword) => (
  dispatch,
  getState
) => {
  request
    .get(`${baseUrl}/${marketId}/product`, { searched: keyword })
    .then((response) => {
      const action = gettingSearchedProducts(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Creating new product:

export const ADD_PRODUCT = "ADD_PRODUCT";
function addingProduct(payload) {
  return {
    type: ADD_PRODUCT,
    payload,
  };
}

export const addProduct = (product, marketId) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/product`)
    .send(product)
    .then((response) => {
      product.id = response.body.id;
      request
        .put(`${baseUrl}/${marketId}/product/${response.body.id}`)

        .then((response) => {
          const action = addingProduct(product);
          dispatch(action);
        });
    })
    .catch(console.error);
};

// Removing a product from the Out of Stock list:

export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
function removingProduct(payload) {
  return {
    type: REMOVE_PRODUCT,
    payload,
  };
}

export const removeProduct = (marketId, productId) => (dispatch, getState) => {
  request
    .delete(`${baseUrl}/${marketId}/product/${productId}`)
    .then((response) => {
      const action = removingProduct(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
