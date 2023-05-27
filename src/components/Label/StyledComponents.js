import styled from 'styled-components';

import { media } from 'ConfigsRoot/constants';

export const Label = styled.div`
    display: inline;
    font-size: ${(props) => props.labelFontSize};
    margin-bottom: ${(props) => props.labelMarginBottom};
    line-height: ${(props) => props.labelLineHeight};
    font-weight: 600;

    ${media.mobile} {
        font-size: 14px;
    }

    ${media.mobileS} {
        font-size: 12px;
    }
`;
