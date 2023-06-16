import * as Types from 'ConfigsRoot/constants';

const initialState = {
  isOpenModal: false,
  modalType: '',
  params: { },
};

const handleToggleModal = (state, action) => {
  const { isOpenModal } = action.payload;
  let modalParams = state;

  if (isOpenModal) {
    modalParams = { ...action.payload };
  } else {
    modalParams = initialState;
  }

  return {
    ...state, ...modalParams,
  };
};

// eslint-disable-next-line default-param-last
const modal = (state = initialState, action) => {
  switch (action.type) {
    case Types.MODAL_SHOW:
      return handleToggleModal(state, action);
    default:
      return state;
  }
};

export default modal;
