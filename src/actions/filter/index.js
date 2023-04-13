import * as Types from 'ConfigsRoot/constants';

export const sortBy = params => ({type: Types.SORT_BY, payload: params});

export const filterCategory = params => ({type: Types.FILTER_CATEGORY, payload: params});

export const getCurrentFilter = params => ({type: Types.GET_CURRENT_FILTER, payload: params});

