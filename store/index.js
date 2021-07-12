import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

import { fetchProduct } from "./actions/productActions";
import { fetchBakery } from "./actions/bakeryActions";

const store = createStore(
  rootReducer, // reducer function
  applyMiddleware(thunk)
);

store.dispatch(fetchProduct());
store.dispatch(fetchBakery());

export default store;
