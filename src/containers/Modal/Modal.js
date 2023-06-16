/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleModal } from 'ActionsRoot';
import { MODAL } from 'ConfigsRoot/constants';
import { SvgIcon } from 'ComponentsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';

import StatusModal from './modals/StatusModal/StatusModal';
import PlaceNewOrderForm from './modals/PlaceNewOrderForm/PlaceNewOrderForm';
import NewManagerForm from './modals/NewManagerForm/NewManagerForm';
import AddProductForm from './modals/AddProductForm/AddProductForm';

import { ModalWrapper, ModalContent, CloseButton } from './StyledComponents';

/* eslint-disable react/prop-types */
const RenderModal = ({ modalType, ...props }) => {
  switch (modalType) {
    case MODAL.STATUS_MODAL:
      return <StatusModal {...props} />;
    case MODAL.ORDER_FORM:
      return <PlaceNewOrderForm {...props} />;
    case MODAL.NEW_MANAGER_FORM:
      return <NewManagerForm {...props} />;
    case MODAL.ADD_NEW_PRODUCT:
      return <AddProductForm {...props} />;
    default:
      return <> </>;
  }
};

const Modal = () => {
  const { isOpenModal, modalType, params } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-shadow
  const handleCloseModal = (modalType) => {
    dispatch(toggleModal(false, modalType));
  };

  return (
    <ModalWrapper isOpenModal={isOpenModal}>
      <ModalContent>
        <CloseButton onClick={() => handleCloseModal(modalType)}>
          <SvgIcon
            width="18"
            height="18"
            viewBox="0 0 9 9"
            path={iconSvg.cancel}
          />
        </CloseButton>
        <RenderModal modalType={modalType} onCloseModal={handleCloseModal} params={params} />
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
