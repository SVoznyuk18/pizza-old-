import * as Types from '../../../configs/constants';

const initialState = {
    isOpenModal: false,
    modalType: '',
    params: null
}


const handleToggleModal = (state, action) => {
    const { isOpenModal, modalType, payload } = action.payload;
    let modalParams = state;

    if (isOpenModal) {
        modalParams = {...action.payload};
    } else {
        modalParams = initialState;
    }

    return {
        ...state, ...modalParams
    }
}

const modal = (state = initialState, action) => {
    switch(action.type){
        case Types.MODAL_SHOW:
            return handleToggleModal(state, action);
        default:
            return state;
    }
}

export default modal;