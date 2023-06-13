import * as Types from 'ConfigsRoot/constants';

const initialState = {
  activeCategory: 'all',
  sortBy: 'popularity',
};

const getCurrentFilterSuccess = (state, action) => {
  const { activeCategoryStorage, sortByStorage } = action.payload;

  return {
    ...state,
    activeCategory: activeCategoryStorage,
    sortBy: sortByStorage,
  };
};

const sortBySuccess = (state, action) => {
  window.localStorage.setItem('sortBy', JSON.stringify(action.payload));
  return {
    ...state,
    sortBy: action.payload,
  };
};

const filterCategoruSuccess = (state, action) => {
  window.localStorage.setItem('activeCategory', JSON.stringify(action.payload));
  return {
    ...state,
    activeCategory: action.payload,
  };
};

// eslint-disable-next-line default-param-last
const filters = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CURRENT_FILTER_SUCCESS:
      return getCurrentFilterSuccess(state, action);
    case Types.SORT_BY_SUCCESS:
      return sortBySuccess(state, action);
    case Types.FILTER_CATEGORY_SUCCESS:
      return filterCategoruSuccess(state, action);
    default:
      return state;
  }
};

export default filters;
