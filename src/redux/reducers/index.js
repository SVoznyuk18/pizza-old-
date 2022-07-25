import { combineReducers } from "redux";

import cart from "./cart";
import filters from "./filters";
import pizza from "./pizza";

const reducer = combineReducers({
    pizza,
    cart,
    filters
})

export default reducer