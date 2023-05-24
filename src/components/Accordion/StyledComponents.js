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
    justify-content: space-between;
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding: 0 20px;
    cursor: pointer;
`;

export const HeaderItem = styled.div`
    
`;

export const AccordionBody = styled.div`
    display: ${props => props.isOpenContent ? 'block': 'none'};
    width: auto;
    height: ${props => props.isOpenContent ? 'auto': '0px'};
    padding: 0 20px 20px;
    transition: all 0.5s;
    overflow: hidden;
`;

export const AccordionContent = styled.div`

`;


export const Order = styled.div`
`; 
export const OrderInfoSection = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`;

export const OrderInfoItem = styled.div`

    font-size: 16px;
    margin-bottom: 20px;

`;
export const OrderCartSection = styled.section``;
export const OrderPriceSection = styled.section`
    display: flex;
    justify-content: ;

    span {
        font-size: 16px;

        &:last-of-type {
            margin-left: 20px;
            b {

                color: ${colors.orange};
            }
        }
    }
`;