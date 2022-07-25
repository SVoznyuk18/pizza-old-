import { SORT_BY, FILTER_CATEGORY } from "../constants";

export const sortBy = (payload) =>{
    return {
        type: SORT_BY,
        payload
    }
}

export const filterCategory = (payload) => {
    return {
        type: FILTER_CATEGORY,
        payload
    }
}
