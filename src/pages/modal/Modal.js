import React from "react";
import PropTypes from 'prop-types';

import { MODAL } from '../../configs/constants';
import { ModalComponent } from "../../components";
import SuccessfullOrder from './modals/successfullOrder/SuccessfullOrder'
import OrderForm from './modals/orderForm/OrderForm'

/* eslint-disable react/prop-types */
const RenderModal = ({ modalType, ...props }) => {
    switch (modalType) {
        case MODAL.SUCCESSFULL_ORDER:
            return <SuccessfullOrder {...props} />
        // case MODAL.FAILURE_ORDER:
        //     return <FailureOrder {...props}/>    
        case MODAL.ORDER_FORM:
            return <OrderForm {...props} />
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