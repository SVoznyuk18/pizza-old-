import { combineReducers } from "redux";

import cart from "./cart";
import filter from "./filter";
import pizza from "./pizza";

const reducer = combineReducers({
    pizza,
    cart
})

export default reducer