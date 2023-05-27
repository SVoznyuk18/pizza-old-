import styled, { css } from 'styled-components';
import { colors } from 'ConfigsRoot/colors';
import { media } from 'ConfigsRoot/constants';

export const CartItemWrapper = styled.div`
    display: flex;
    width: 100%;
    border-top: 1px solid ${colors.greyLine};
    padding-top: 30px;

    ${(props) => props.type === 'orders' && css`
        padding-top: 5px;
    `}

    ${media.tablet} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const CartImgWrapper = styled.div`
    width: 80px;
    height: 80px;
    margin: 0 15px 0 0;
    max-width: 15%;

    ${media.tablet} {
        width: 250px;
        height: 250px;
        margin: 0 auto;
    }
    ${(props) => props.type === 'orders' && css`
        width: 40px;
        height: 40px;
        min-width: 40px;
    `}

    ${media.tablet} {
        max-width: 100%;
    }
`;

export const CartItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;

    h3 {
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.01em;
        ${media.tablet} {
            text-align: center;
        }
    }

    p {
        font-size: 18px;
        color: #8d8d8d;
        ${media.tablet} {
            text-align: center;
        }
    }

    ${(props) => props.type === 'orders' && css`
        h3 {
            font-size: 16px;
            line-height: 16px;
            white-space: nowrap
        }
        p {
            font-size: 16px;
            line-height: 16px;
            white-space: nowrap
        }
    `}

    ${media.tablet} {
        width: 100%;
    }
`;

export const ControlsWrapper = styled.div`
    width: 55%;
    display: flex;
    justify-content: center;

    ${(props) => props.type === 'orders' && css`
        justify-content: flex-start;
    `}
    ${media.tablet} {
        width: 100%;
    }
`;

export const CountSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    b {
        font-size: 22px;
    }

    ${(props) => props.type === 'orders' && css`
        b {
            font-size: 14px;
        }
    `}
`;

export const RemoveSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const PriceSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    b {
        font-weight: bold;
        font-size: 22px;
        letter-spacing: 0.01em;
    }

    ${(props) => props.type === 'orders' && css`
        b {
            font-size: 14px;
        }
    `}
`;
