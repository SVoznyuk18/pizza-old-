import React from "react";

import {MODAL} from '../../configs/constants';
import { ModalComponent } from "../../components";
import SuccessfullOrder from './modals/successfullOrder/SuccessfullOrder'
import OrderForm from './modals/orderForm/OrderForm'

const RenderModal = ({modalType, ...props}) => {
    switch(modalType) {
        case MODAL.SUCCESSFULL_ORDER:
            return <SuccessfullOrder {...props}/>
        // case MODAL.FAILURE_ORDER:
        //     return <FailureOrder {...props}/>    
        case MODAL.ORDER_FORM:
            return <OrderForm {...props}/>
        default:
            return <></>;
    }
};

const Modal = ( {isOpenModal, closeModal, modalType, payload}) => {
    return(
        <ModalComponent isOpenModal={isOpenModal} onCloseModal={closeModal}>
            <RenderModal modalType={modalType} onCloseModal={closeModal} payload={payload} />
        </ModalComponent>
    );
}

export default Modal;