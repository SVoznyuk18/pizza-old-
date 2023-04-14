import styled from "styled-components";

import { media } from "ConfigsRoot/constants";

export const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;

    ${media.mobileS} {
        width: 100%;
    }
`;

export const Label = styled.div`
    display: inline;
    font-size: ${props => props.labelFontSize};
    margin-bottom: ${props => props.labelMarginBottom};
    line-height: ${props => props.labelLineHeight};
    font-weight: 600;

    ${media.mobile} {
        font-size: 14px;
    }

    ${media.mobileS} {
        font-size: 12px;
    }
`;

export const StyledInput = styled.input`
    height: ${props => props.height};
    width: ${props => props.width};
    padding: ${props => props.padding};
    border: solid 1px ${props => props.borderColor};
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