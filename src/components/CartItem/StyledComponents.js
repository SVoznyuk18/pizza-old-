import styled from 'styled-components'

export const CarItemWrapper = styled.div`
    display: flex;
    width: 100%;
    border-top: 1px solid $gray-line;
    padding-top: 30px;
    margin-top: 30px;
`;

export const CartItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;

    h3 {
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.01em;
    }

    p {
        font-size: 18px;
        color: #8d8d8d;
      }
`;

export const CountSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 13%;

    b {
        font-size: 22px;
      }
`;

export const RemoveSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 4%;
`;

export const PriceSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;

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