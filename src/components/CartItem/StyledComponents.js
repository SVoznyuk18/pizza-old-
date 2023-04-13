import styled from 'styled-components'
import { colors } from 'ConfigsRoot/colors';
import { media } from 'ConfigsRoot/constants';

export const CarItemWrapper = styled.div`
    display: flex;
    width: 100%;
    border-top: 1px solid ${colors.greyLine};
    padding-top: 30px;

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
    min-width: 80px;

    ${media.tablet} {
        width: 250px;
        height: 250px;
        margin: 0 auto;
    }
`;

export const CartItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

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

    ${media.tablet} {
        width: 100%;
    }
`;

export const ControlsWrapper = styled.div`
    width: 100%;
      display: flex;
      justify-content: center;
`;

export const CountSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    b {
        font-size: 22px;
      }
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
`;

export const IconCustom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};

    svg {
        fill: ${props => props.fill};
    }

    &:hover {
        svg {
            fill: ${props => props.fillHover};
        }
    }
`;