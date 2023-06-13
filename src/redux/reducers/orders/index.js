import * as Types from 'ConfigsRoot/constants';

const initialState = {
  orders: [],
  ordersLoading: false,
  ordersError: false,
};

const getOrdersSuccess = (state, action) => {
  const { orders } = action.payload;
  return {
    ...state,
    orders,
  };
};

const getOrdersLoading = (state, action) => {
  const ordersLoading = action.payload;
  return {
    ...state,
    ordersLoading,
  };
};

const getOrdersFailure = (state, action) => {
  const ordersError = action.payload;
  return {
    ...state,
    ordersError,
  };
};

// eslint-disable-next-line default-param-last
const orders = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ORDERS_SUCCESS:
      return getOrdersSuccess(state, action);
    case Types.GET_ORDERS_LOADING:
      return getOrdersLoading(state, action);
    case Types.GET_ORDERS_FAILURE:
      return getOrdersFailure(state, action);
    default:
      return state;
  }
};

export default orders;
