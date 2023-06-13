import * as Types from 'ConfigsRoot/constants';

const initialState = {
  pizza: [],
  pizzaLoading: false,
  pizzaError: false,
};

const getPizzaSuccess = (state, action) => ({ ...state, pizza: action.payload });

const getPizzaLoading = (state, action) => ({ ...state, pizzaLoading: action.payload });

const getPizzaFailure = (state, action) => ({ ...state, pizzaError: action.payload });

// eslint-disable-next-line default-param-last
const pizza = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PIZZA_SUCCESS:
      return getPizzaSuccess(state, action);
    case Types.GET_PIZZA_LOADING:
      return getPizzaLoading(state, action);
    case Types.GET_PIZZA_FAILURE:
      return getPizzaFailure(state, action);
    default:
      return state;
  }
};

export default pizza;
