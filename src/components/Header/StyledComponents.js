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
