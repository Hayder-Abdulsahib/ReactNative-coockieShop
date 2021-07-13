import * as actionTypes from "../actions/types";

const initialState = {
  items: [
    {
      itemId: 16,
      quantity: 3,
    },
    {
      itemId: 6,
      quantity: 2,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
