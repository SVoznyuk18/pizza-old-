import styled from "styled-components";

import { media } from "ConfigsRoot/constants";
import { colors } from "ConfigsRoot/colors";

export const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    position: relative;

    ${media.mobileS} {
        width: 100%;
    }
`;

export const Input = styled.input`
    height: ${props => props.height};
    width: ${props => props.width};
    padding: ${props => props.padding};
    border: solid 1px ${props => props.borderColor};;
    border-radius: ${props => props.borderRadius ? props.borderRadius : '15px'};
    font-size: ${props => props.fontSize};

    ${media.mobile} {
        height: 30px;
        font-size: 14px;
    }

    ${media.mobileS} {
        width: 100%;
        font-size: 12px;
    }
`;

export const WrapperTimeList = styled.div`
    display: ${props => props.showTimeList ? 'block' : 'none'};
    position: absolute;
    top: 44px;
    left: 0;
    margin-top: 3px;
    overflow: hidden;
    border-radius: 10px;
    z-index: 9999;
`;

export const TimeList = styled.ul`
    width: 100px;
    height: 100px;
    overflow: auto;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    background-color: ${colors.greyLine};
    

    &::-webkit-scrollbar-track {
        background-color: ${colors.grey};
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        width: 10px;
        background-color: ${colors.grey};
    }

    &::-webkit-scrollbar-thumb {
	    border-radius: 10px;
        background-color: ${colors.orange};
    }  

    ${media.mobile} {
        height: 100px;
    }
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 25px !important;
    border-left: 1px solid ${colors.grey};
    border-bottom: 1px solid ${colors.grey};
    cursor: ${props => props.disabled ? 'pointer' : 'auto'} ;
    font-size: 16px;
    font-weight: 800;
    color: ${props => props.disabled ? colors.black : colors.grey};
    scroll-snap-align: start;

    &: hover {
        background-color: ${props => (props.disabled ? colors.grey : 'transparent')};
    }

    ${media.mobile} {
        font-size: 12px;
        height: 30px !important;
    }
`;