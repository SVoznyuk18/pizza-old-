import styled from "styled-components";

import { colors } from "Configs/colors";

export const Wrapper = styled.div`
    position: relative;
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: ${props => props.borderRadius ? props.borderRadius : '15px'};
    margin: ${props => props.margin};
`;

export const Label = styled.div`
    display: inline;
    font-size: ${props => props.labelFontSize};
    margin-bottom: ${props => props.labelMarginBottom};
    line-height: ${props => props.labelLineHeight};
    font-weight: 600;
`;

export const Input = styled.input`
    height: ${props => props.height};
    width: ${props => props.width};
    padding: ${props => props.padding};
    border: solid 1px ${props => props.borderColor};;
    border-radius: ${props => props.borderRadius ? props.borderRadius : '15px'};
    font-size: ${props => props.fontSize}
`;

export const WrapperTimeList = styled.div`
    display: ${props => props.showTimeList ? 'block' : 'none'};
    position: absolute;
    top: 58px;
    left: 0;
    margin-top: 3px;
    overflow: hidden;
    border-radius: 10px;
`;

export const TimeList = styled.ul`
    width: 120px;
    height: 200px;
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
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    width: 100%;
    height: 50px !important;
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
`;