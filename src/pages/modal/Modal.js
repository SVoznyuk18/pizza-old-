import React from "react";
import PropTypes from 'prop-types';

import { MODAL } from 'ConfigsRoot/constants';
import { ModalComponent } from "ComponentsRoot";
import SuccessModal from './modals/successModal/SuccessModal';
import OrderForm from './modals/orderForm/OrderForm';
import NewManagerForm from './modals/newManagerForm/NewManagerForm';
import AddProductForm from './modals/addProductForm/AddProductForm';

/* eslint-disable react/prop-types */
const RenderModal = ({ modalType, ...props }) => {
    switch (modalType) {
        case MODAL.SUCCESS_MODAL:
            return <SuccessModal {...props} />
        // case MODAL.FAILURE_ORDER:
        //     return <FailureOrder {...props}/>    
        case MODAL.ORDER_FORM:
            return <OrderForm {...props} />
        case MODAL.NEW_MANAGER_FORM:
            return <NewManagerForm {...props} />
        case MODAL.ADD_NEW_PRODUCT:
            return <AddProductForm {...props} />
        default:
            return <></>;
    }
};

const Modal = ({ isOpenModal, closeModal, modalType, payload }) => {
    return (
        <ModalComponent isOpenModal={isOpenModal} onCloseModal={closeModal}>
            <RenderModal modalType={modalType} onCloseModal={closeModal} payload={payload} />
        </ModalComponent>
    );
}

Modal.propTypes = {
    isOpenModal: PropTypes.bool,
    modalType: PropTypes.string,
    closeModal: PropTypes.func,
    payload: PropTypes.object
}

Modal.defaultProps = {
    isOpenModal: false,
    modalType: '',
    closeModal: () => { },
    payload: {}
}

export default Modal;