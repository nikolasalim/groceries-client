import { combineReducers } from "redux";
import markets from "./markets";
import products from "./products";

export default combineReducers({ markets, products });
