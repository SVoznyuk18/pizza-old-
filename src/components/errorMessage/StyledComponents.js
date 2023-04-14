import styled from "styled-components";

import { colors } from "ConfigsRoot/colors";
import { media } from 'ConfigsRoot/constants';

export const Wrapper = styled.div`
    display: inline;
    margin-top: 5px;

    ${media.mobile} {
        margin-top: 0;
    }
`;

export const ErrorLabel = styled.h4`
    font-size: 12px;
    font-weight: 100;
    color: ${colors.errorMessage};
`;