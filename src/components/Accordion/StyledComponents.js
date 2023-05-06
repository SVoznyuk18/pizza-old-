import styled from "styled-components";

import { colors } from 'ConfigsRoot/colors';

export const AccordionWrapper = styled.div`

`;

export const AccordionItem = styled.div`
    
    width: 100%;
    margin-bottom: 25px;
    
    border-radius: 15px;
    box-shadow: 0px 0px 5px 1px ${colors.grey};
    
`;

export const AccordionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    font-size: 16px;
`;

export const AccordionBody = styled.div`
    width: 100%;
    height: ${props => props.isShowContent ? 'auto': '0px'};
    transition: all 0.5s;
    overflow: hidden;
`;

export const AccordionContent = styled.div`

`;