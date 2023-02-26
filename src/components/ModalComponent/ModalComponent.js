import React, { memo } from "react";
import PropTypes from 'prop-types';

import { SVG } from '..';
import iconSvg from '../../assets/svg/iconSvg';
import { ModalWrapper, ModalContent, CloseButton } from './StyledComponents';

const ModalComponent = ({ isOpenModal, onCloseModal, children }) => {
    return (
        <ModalWrapper isOpenModal={isOpenModal}>
            <ModalContent>
                <CloseButton onClick={() => onCloseModal()}>
                    <SVG
                        width='18'
                        height='18'
                        viewBox='0 0 9 9'
                        path={iconSvg.cancel}
                    />
                </CloseButton>
                {children}
            </ModalContent>
        </ModalWrapper>
    )
};

ModalComponent.propTypes = {
    isOpenModal: PropTypes.bool,
    onCloseModal: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired
}

ModalComponent.defaultProps = {
    isOpenModal: false,
    onCloseModal: () => { }
}

export default memo(ModalComponent);