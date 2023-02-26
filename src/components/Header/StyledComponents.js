import styled from "styled-components";
import { colors } from '../../configs/colors';
import { media } from '../../configs/constants';

export const HeaderWrapper = styled.div`
    border-bottom: 1px solid #f6f6f6;
    padding: 40px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.tabletL} {
        padding: 25px 30px;
    }
    ${media.tablet} {
        padding: 15px 25px;
        width: 100%;
    }
    
    ${media.mobile} {
        padding: 10px;
    }
`;

export const Cost = styled.div`
    font-size: 16px;
    color: ${colors.black};
    font-weight: 600;

    ${media.mobile} {
        font-size: 14px;
    }
`;

export const Amount = styled.div`
    font-size: 16px;
    color: ${colors.black};
    font-weight: 600;

    ${media.mobile} {
        font-size: 14px;
    }
`;

export const HeaderLogoWrapper = styled.div`
    display: flex;  
`;

export const HeaderLogoDescription = styled.div`
    margin-left: 10px;
`;

export const HeaderTitle = styled.h1`
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #181818;
`;

export const HeaderSubTitle = styled.p`
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #7B7B7B;
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

export const Delimiter = styled.div`
    width: 1px;
    height: 25px;
    background-color: rgba(255, 255, 255, 0.25);
    margin: 0 5px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.tablet} {
        width: 100%;
    }
`;