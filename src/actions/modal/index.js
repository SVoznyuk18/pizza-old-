import * as Types from 'ConfigsRoot/constants';

export const toggleModal = (isOpenModal, modalType, payload) => ({ type: Types.MODAL_SHOW, payload: { isOpenModal, modalType, payload } });
