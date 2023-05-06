import { combineReducers } from "redux";

import cart from "./cart";
import filters from "./filters";
import pizza from "./pizza";
import modal from './modal';
import login from "./login";
import users from "./users";
import orders from './orders';

const reducer = combineReducers({
    pizza,
    cart,
    filters,
    modal,
    login,
    users,
    orders
})

export default reducer