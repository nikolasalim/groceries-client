import { combineReducers } from "redux";
import markets from "./markets";
import products from "./products";
import redirect from "./redirect";

export default combineReducers({ markets, products, redirect });
