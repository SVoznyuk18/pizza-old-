import styled from 'styled-components';
import { colors } from '../../configs/colors';


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
`;

export const ModalContent = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    background-color: ${colors.white};
`;

export const CloseButton = styled.div`
    position: absolute;
    top: -20px;
    right: -25px;
    cursor: pointer;

    svg {
        fill: ${colors.white};
    }

    &: hover {
        svg {
            fill: ${colors.orange};
        }
    }
    
`;