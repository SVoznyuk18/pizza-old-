import { combineReducers } from "redux";

import cart from "./cart";
import filters from "./filters";
import pizza from "./pizza";
import modal from './modal';
import login from "./login";

const reducer = combineReducers({
    pizza,
    cart,
    filters,
    modal,
    login
})

export default reducer