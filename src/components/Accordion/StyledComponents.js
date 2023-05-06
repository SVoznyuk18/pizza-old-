import styled from "styled-components";

import { colors } from 'ConfigsRoot/colors';

export const AccordionWrapper = styled.div`

`;

export const AccordionItem = styled.div`
    width: 100%;
    margin-bottom: 25px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 1px ${colors.grey};
`;

export const AccordionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    font-size: 16px;
`;

export const AccordionBody = styled.div`
    width: 100%;
    margin-top: 20px;
    height: ${props => props.isOpenContent ? 'auto': '0px'};
    transition: all 0.5s;
    overflow: hidden;
`;

export const AccordionContent = styled.div`

`;