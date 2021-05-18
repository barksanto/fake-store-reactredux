import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [{
    id: 1,
    title: "Barkley",
    category: "coder",
  }] //not sure if the comma is needed
};


// reducer always takes the initial state and the action
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state

    default:
      return state;
  }
}