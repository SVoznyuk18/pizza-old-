import { SORT_BY, FILTER_CATEGORY } from "../constants";

const initialState = {
    idActiveCategory: 0,
    sortBy: 'популярности'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case FILTER_CATEGORY:
            return {
                ...state,
                idActiveCategory: action.payload
            }
        default:
            return state
    }
}

export default filters;