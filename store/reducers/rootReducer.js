import { combineReducers } from "redux";
import bakeryReducer from "./bakeryReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  bakeries: bakeryReducer,
  products: productReducer,
  items: cartReducer,
});

export default rootReducer;
