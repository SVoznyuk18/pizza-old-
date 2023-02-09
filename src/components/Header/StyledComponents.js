import styled from "styled-components";

export const HeaderWrapper = styled.div`
    border-bottom: 1px solid #f6f6f6;
    padding: 40px 0;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 70px;
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
    margin-left: 14px;
    margin-right: 14px;
`;