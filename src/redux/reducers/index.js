import { combineReducers } from "redux";

import cart from "./cart";
import filters from "./filters";
import pizza from "./pizza";
import modal from './modal';

const reducer = combineReducers({
    pizza,
    cart,
    filters,
    modal
})

export default reducer