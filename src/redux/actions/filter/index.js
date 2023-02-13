import * as Types from '../../../configs/constants';

export const sortBy = params => ({type: Types.SORT_BY, payload: params});

export const filterCategory = params => ({type: Types.FILTER_CATEGORY, payload: params});
