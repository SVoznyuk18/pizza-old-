import * as Types from '../../../configs/constants'

export const handleToggleModal = (isOpenModal, modalType, payload) => ({type: Types.MODAL_SHOW, payload: {isOpenModal, modalType, payload}});