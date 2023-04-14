import styled from 'styled-components';
import { colors } from 'ConfigsRoot/colors';
import { media } from 'ConfigsRoot/constants';

export const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    transform: ${props => (props.isOpenModal ? 'scale(1)' : 'none')};
    z-index: ${props => (props.isOpenModal ? '99999' : -'10')};
    opacity: ${props => (props.isOpenModal ? 1 : 0)};

    ${media.mobile} {
        padding: 10px;
    }
`;

export const ModalContent = styled.div`
    position: relative;
    width: 500px;
    padding: 40px;
    background-color: ${colors.white};
    border-radius: 20px;
 

    ${media.mobile} {
        padding: 10px;
    }

    ${media.mobileS} {
        height: 450px;
        overflow: scroll;
    }
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;

    svg {
        fill: ${colors.black};
    }

    &: hover {
        svg {
            fill: ${colors.orange};
        }
    }
`;