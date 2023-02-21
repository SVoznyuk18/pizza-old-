
import * as Types from '../../../configs/constants';

const initialState = {
    idActiveCategory: 0,
    sortBy: 'popularity'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case Types.SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case Types.FILTER_CATEGORY:
            return {
                ...state,
                idActiveCategory: action.payload
            }
        default:
            return state
    }
}

export default filters;