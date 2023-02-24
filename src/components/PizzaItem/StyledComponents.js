import styled from "styled-components";
import { colors } from '../../configs/colors';
import {media} from '../../configs/constants';

export const PizzaBlock = styled.div`
    width: 350px;
    min-width: 260px;
    margin: 0 10px 65px 10px;
    text-align: center;
    border-radius: 15px;
    padding: 15px 10px;
    box-shadow: 0px 0px 10px 5px ${colors.grey};

    ${media.tabletL} {
        width: 300px;
        margin: 0 10px 40px 10px;
    }

    ${media.tablet} {
        width: 100%;
        margin: 0 0 30px 0;
    }
    
`;

export const PizzaImg = styled.img`
    width: ${props => (props.width ? props.width : "260px")};
`;

export const Title = styled.h4`
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 1%;
    margin-bottom: 20px;

    ${media.tablet} {
        font-size: 32px;
    }
    ${media.mobile} {
        font-size: 18px;
    }
`;

export const SelectorSection = styled.div`
    display: flex;
    background-color: #f3f3f3;
    border-radius: 10px;
    flex-direction: column;
    padding: 6px;
`;

export const BottomSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;

`;

export const Price = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.015em;

    ${media.mobile} {
        font-size: 18px;
    }

`;

export const IconCustom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin};
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