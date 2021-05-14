import { ActionTypes } from "../constants/action-types"

// 3 ACTIONS, one for each action-type
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.selectedProduct,
    payload: product,
  };
};